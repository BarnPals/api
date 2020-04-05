// Relative imports.
const devEnvVars = require('./dev');
const prodEnvVars = require('./prod');

if (process.env.NODE_ENV === "production") {
  module.exports = prodEnvVars;
} else {
  module.exports = devEnvVars;
}
