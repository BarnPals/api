// Relative imports.
const ROUTING_ERRORS = require('../../errors');
const ERRORS = require('./errors');

const deriveRequestErrors = (req) => {
  const errors = [];

  // Escape early if there's no request params.
  if (!req || !req.params) {
    return [ROUTING_ERRORS['missing-request-params-400']];
  }

  if (!req.params.userID) {
    return errors.push(ERRORS['User-getOne-400--missing-userID']);
  }

  return errors;
}

module.exports = {
  deriveRequestErrors,
};
