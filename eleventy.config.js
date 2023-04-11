module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    eleventyConfig.addPassthroughCopy({ "dist/tw": "/" });
    eleventyConfig.addPassthroughCopy({ "dist/ts": "/" });
    return {
        dir: {
            input: "src",
            output: "dist/11ty"
        }
    }
}
