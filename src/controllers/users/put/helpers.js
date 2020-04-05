// Relative imports.
const ROUTING_ERRORS = require('../../errors');
const ERRORS = require('./errors');

const deriveRequestErrors = (req) => {
  const errors = [];

  // Escape early if there's no request body.
  if (!req || !req.body) {
    return [ROUTING_ERRORS['missing-request-body-400']];
  }

  if (!req.params) {
    return [ROUTING_ERRORS['missing-request-path-params-400']];
  }

  return errors;
}

module.exports = {
  deriveRequestErrors,
};
