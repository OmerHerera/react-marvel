module.exports = function (grunt, options) {
  return {
    "react": {
      "files": "./**/*.*",
      "tasks": ["browserify:client"]
    }
  }
};
