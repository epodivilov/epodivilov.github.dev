/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/**/demo/*");
  // config.addPassthroughCopy("./source/**/img/*");

  /* eleventyConfig.addFilter("readableDate", (locale, dateObj) => {
    console.log("\x1b[45m[LOG]\x1b[49m ~ eleventyConfig.addFilter ~ locale", locale,dateObj)
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(dateObj).toLocaleDateString(locale, options);
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
    return new Date(dateObj).toLocaleDateString(null, options);
  }); */

  return {
    dir: {
      input: "source",
      output: "build",
    },
    pathPrefix: "/epodivilov.github.dev",
  };
};
