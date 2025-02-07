export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("dist");

  eleventyConfig.addPassthroughCopy("src/css");
  // eleventyConfig.addPassthroughCopy("src/img"); check scripts/image-transform.js
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
	eleventyConfig.addWatchTarget("**/*.(png|jpeg|webp|js)");
};