export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  });

  eleventyConfig.addCollection("featuredProjects", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/projects/*.md")
      .filter((item) => item.data.featured)
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  });

  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    if (!path) return base;
    if (/^https?:\/\//i.test(path)) return path;
    const cleanBase = (base || "").replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
  });

  eleventyConfig.addFilter("startsWith", (value, prefix) => {
    return typeof value === "string" && typeof prefix === "string"
      ? value.startsWith(prefix)
      : false;
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
