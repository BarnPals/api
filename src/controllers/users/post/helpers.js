// Relative imports.
const ROUTING_ERRORS = require('../../errors');
const ERRORS = require('./errors');

const deriveRequestErrors = (req) => {
  const errors = [];

  // Escape early if there's no request body.
  if (!req || !req.body) {
    return [ROUTING_ERRORS['missing-request-body-400']];
  }

  if (!req.body.firstName) {
    errors.push(ERRORS['User-post-400--firstName-missing']);
  }

  if (!req.body.lastName) {
    errors.push(ERRORS['User-post-400--lastName-missing']);
  }

  if (!req.body.bio) {
    errors.push(ERRORS['User-post-400--bio-missing']);
  }

  if (!req.body.imageURL) {
    errors.push(ERRORS['User-post-400--imageURL-missing']);
  }

  if (!req.body.email) {
    errors.push(ERRORS['User-post-400--email-missing']);
  }

  return errors;
}

module.exports = {
  deriveRequestErrors,
};
