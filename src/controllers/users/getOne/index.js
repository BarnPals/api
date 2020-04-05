// Relative imports.
const { deriveRequestErrors } = require('./helpers');

module.exports = (req, res) => {
  // Derive request errors.
  const errors = deriveRequestErrors(req);

  // Escape early if there are request errors.
  if (errors && errors.length > 0) {
    return res.status(400).send({ errors });
  }

  return res.status(200).send({});
};
