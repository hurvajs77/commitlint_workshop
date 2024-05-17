const path = require("path");

module.exports = {
  "*": "yarn prettify:format",
  "src/**/*.ts?(x)": (filenames) => `yarn lint:fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`,
};
