const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@utils": "src/utils",
    "@constants": "src/constants",
    "@store": "src/store"
  })(config);
  return config;
};
