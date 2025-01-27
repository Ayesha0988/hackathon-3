// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '1h7orxsv',
  dataset: 'production',
  apiVersion: '2021-10-21', 
  token: process.env.SANITY_TOKEN,  // Fetch from env variable
  useCdn: false,
});

export { client };
