import 'dotenv/config'; // Load environment variables from .env
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

async function fetchCollection() {
  return client.getEntries({ content_type: 'collection', order: 'sys.createdAt' })
  .then(function(response) {
    const collection = response.items
    .map(function(collection) {
      // store cover image for collection
      const coverPhoto = collection.fields?.photos.find(photo =>
        photo.metadata?.tags?.some(tag => tag.sys?.id === "cover")
      );
      if (coverPhoto) {
        // console.log("\ndebug coverPhoto: " + JSON.stringify(coverPhoto));
        collection.fields.cover = `https:${coverPhoto.fields?.file.url}` || null;
      }
      return collection.fields;
    });
    return collection;
  })
  .catch(console.error);
};

export default async function() {
  let collection = await fetchCollection();
  // console.log("collection: " + JSON.stringify(collection));
  return collection;
}