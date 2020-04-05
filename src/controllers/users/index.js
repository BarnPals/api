// Node modules.
const app = require('express')();
// Relative imports.
const onGetOne = require('./getOne');
const onPost = require('./post');
const onPut = require('./put');

// Get current user.
app.get('/:userID', onGetOne);

// Create user.
app.post('/', onPost);

// Update current user.
app.put('/:userID', onPut);

// Export routes.
module.exports = app;
