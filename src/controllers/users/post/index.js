// Node modules.
const get = require('lodash/get');
// Relative imports.
const { deriveRequestErrors } = require('./helpers');

module.exports = (req, res) => {
  // Derive request errors.
  const errors = deriveRequestErrors(req);

  // Escape early if there are request errors.
  if (errors && errors.length > 0) {
    return res.status(400).send({ errors });
  }

  // Derive request properties.
  const bio = get(req, 'body.bio');
  const email = get(req, 'body.email');
  const firstName = get(req, 'body.firstName');
  const imageURL = get(req, 'body.imageURL');
  const lastName = get(req, 'body.lastName');

  return res.status(200).send(req.body);
};
