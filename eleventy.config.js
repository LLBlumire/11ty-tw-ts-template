module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    eleventyConfig.addPassthroughCopy({ "dist/tw": "/" });
    return {
        dir: {
            input: "src",
            output: "dist/11ty"
        }
    }
}
