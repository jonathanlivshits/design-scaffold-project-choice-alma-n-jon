module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/md");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/style");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

const themer_btn = document.getElementById("themer");
function themeFunction() {
  if (document.body.classList.contains("cute")) {
    document.body.classList.remove("cute");
    document.body.classList.add("cool");
    themer_btn.innerHTML = "Theme";
  } else {
    document.body.classList.remove("cool");
    document.body.classList.add("cute");
    themer_btn.innerHTML = "Theme";
  }
}
