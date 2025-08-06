// src/sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset   = import.meta.env.VITE_SANITY_DATASET;

if (!projectId) throw new Error('Missing VITE_SANITY_PROJECT_ID');
if (!dataset)   throw new Error('Missing VITE_SANITY_DATASET');

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
