import "dotenv/config"; // Loads .env file
 
const isDevelopment = process.env.NODE_ENV === "development";
console.log(`landscape env: ${process.env.NODE_ENV}`);

export default {
  title: "Grit Hofmann",
  description: "Grit Hofmann | Journalist & Marathon Runner",
  keywords: "travel, hiking, photography, portfolio",
  domain: isDevelopment ? "http://localhost:8080" : "https://grithofmann.netlify.app",
  environment: process.env.NODE_ENV || "development", // Detects production or development
};