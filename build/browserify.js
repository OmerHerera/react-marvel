module.exports = function (grunt, options) {
    return {
        options: {
            transform: [require("grunt-react").browserify]
        },
        client: {
            src: ["./react_components/*.jsx"],
            dest: "./scripts/app.min.js"
        }
    };
};
