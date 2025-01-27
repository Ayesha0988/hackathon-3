// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: '1h7orxsv',
  dataset: 'production',
  apiVersion: '2021-10-21', 
  token: "skn1LX2J7s2y3daqCIYLjhEVzQTp6SjhIyxo6JRxY6zrJdJwajhwQt4HjTAk6hfRQtbfw3ZojwlrFC8GMV6ZIEWD2BNh1eOl2dIRroHe2eLhLydH2dT02ZH0kRzlFBT4vO8BRoU1xPdGv15USEfNoWplq92aAT3mAuUBWjGKLCvLYJ592Sfa", // or leave blank for unauthenticated usage
  useCdn: false, 
})