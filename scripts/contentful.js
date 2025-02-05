import { createClient } from "contentful";
import { writeFile } from "fs/promises";
import 'dotenv/config'; // Load environment variables from .env

console.log("SPACE_ID:", process.env.CTFL_SPACE);
console.log("ACCESS_TOKEN:", process.env.CTFL_ACCESSTOKEN ? "✅ Loaded" : "❌ Missing");

const client = createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

// Fetch and store collection data from Contentful
async function fetchContent() {
  try {
    const entries = await client.getEntries({ content_type: "collection" });

    const filePath = "./src/_data/cfdata.json";
    await writeFile(filePath, JSON.stringify(entries.items, null, 2));
    console.log(`✅ Collections fetched and saved to ${filePath}`);
    // console.log("content: " + JSON.stringify(entries.items));

    return entries.items;
  } catch (error) {
    console.error("❌ Error fetching Contentful data:", error);
  }
};

// Post processing for all collections
function processCollection(collection) {
  collection.map(function(collection) {
    // store cover image for collection
    const coverPhoto = collection.fields?.photos.find(photo =>
      photo.metadata?.tags?.some(tag => tag.sys?.id === "cover")
    );
    if (coverPhoto) {
      collection.fields.cover = `https:${coverPhoto.fields?.file.url}` || null;
    }
    return collection.fields;
  });
  return collection;
};

// Filter and store all portfolio collections
function writePortfolioCollection (collections) {
  console.log(`✅ Processing Portfolio collection!`);
  const filePath = "./src/_data/portfolio.json";

  let portfolio = collections.filter(function (collection) {
    return collection.fields.category === "Portfolio";
  })
  console.log("# portfolio collections: " + portfolio.length);
  writeFile(filePath, JSON.stringify(portfolio, null, 2));
  console.log(`✅ Portfolio collection saved to ${filePath}`);
};

// Filter and store all run collections
function writeRunsCollection (collections) {
  console.log(`✅ Processing Runs collection!`);
  const filePath = "./src/_data/runs.json";

  let runs = collections.filter(function (collection) {
    return collection.fields.category === "Runs";
  })
  console.log("# runs collections: " + runs.length);
  writeFile(filePath, JSON.stringify(runs, null, 2));
  console.log(`✅ Runs collection saved to ${filePath}`);
};

// Filter and store all travel collections
function writeTravelsCollection (collections) {
  console.log(`✅ Processing Travels collection!`);
  const filePath = "./src/_data/travels.json";

  let travels = collections.filter((collection) => collection.fields.category === "Travels");
  console.log("# travels collections: " + travels.length);
  writeFile(filePath, JSON.stringify(travels, null, 2));
  console.log(`✅ Travels collection saved to ${filePath}`);
};

async function main() {
  const collections = await fetchContent(); // Wait for fetch to complete
  const processedCollections = processCollection(collections);
  // console.log("Processed Content:", processedCollections);
  writePortfolioCollection(processedCollections);
  writeTravelsCollection(processedCollections);
  writeRunsCollection(processedCollections);
}

main(); // Run the async function