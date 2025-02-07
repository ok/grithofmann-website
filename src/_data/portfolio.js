import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get the current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read JSON manually
const portfolio = JSON.parse(
  readFileSync(join(__dirname, "cf-portfolio.json"), "utf-8")
);

function getSlug(title) {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ""); // Remove special characters
}

const portfolioCollections = portfolio.map(collection => ({
  ...collection, slug: getSlug(collection.fields.title)
}));

export default portfolioCollections;