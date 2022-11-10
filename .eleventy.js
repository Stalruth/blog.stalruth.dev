const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addLiquidFilter("getNewestCollectionItemDate", pluginRss.getNewestCollectionItemDate);
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addPassthroughCopy({ 'node_modules/mvp.css/mvp.css' : 'css/mvp.css' });
  eleventyConfig.addPassthroughCopy({ 'static' : '/' });
  return {
    "dir": {
      "input": "content",
    },
  };
};
