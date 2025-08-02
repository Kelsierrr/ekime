// /api/contact.js
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Missing MONGODB_URI');
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message, hp } = req.body;
  if (hp) return res.status(400).json({ error: 'Spam detected' });
  if (!name || !email || !message)
    return res.status(400).json({ error: 'Missing required fields' });

  try {
    // Persist to MongoDB
    const client = await connectToDatabase();
    const db = client.db();
    await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Prepare SMTP config (trim values to avoid whitespace issues)
    const host = process.env.SMTP_HOST?.trim();
    const port = Number(process.env.SMTP_PORT);
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();

    if (!host || !port || !user || !pass) {
      console.error('SMTP config missing or malformed:', { host, port, user });
      return res.status(500).json({ error: 'Email configuration error' });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false, // helpful in some environments
      },
    });

    const mailText = `You have a new contact submission:

Name: ${name}
Email: ${email}
Message:
${message}
`;

    await transporter.sendMail({
      from: `"Ekime Website" <${user}>`,
      to: 'info@ekime.com.ng',
      subject: `New contact from ${name}`,
      text: mailText,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
