module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'node_modules/mvp.css/mvp.css' : 'css/mvp.css' });
  eleventyConfig.addPassthroughCopy({ 'css' : 'css' });
  return {
    "dir": {
      "input": "content",
    },
  };
};
