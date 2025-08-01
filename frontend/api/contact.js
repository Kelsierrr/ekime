// api/contact.js
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Missing MONGODB_URI');
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

  try {
    // Persist to MongoDB
    const client = await connectToDatabase();
    const db = client.db(); // uses DB from URI
    await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailText = `New contact form submission:

Name: ${name}
Email: ${email}
Message:
${message}
`;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: 'info@ekime.com.ng',
      subject: `New message from ${name}`,
      text: mailText,
    });

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
