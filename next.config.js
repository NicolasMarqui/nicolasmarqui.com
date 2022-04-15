const withPlugins = require("next-compose-plugins");

const config = {
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = withPlugins([], config);
