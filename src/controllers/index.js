// Node modules.
const express = require('express');

// Start the router.
const apiRouter = express();

// Add routes.
// apiRouter.use('/organization', require('./organizations'));
// apiRouter.use('/session', require('./sessions'));
// apiRouter.use('/task', require('./tasks'));
apiRouter.use('/users', require('./users'));

// Export the router.
module.exports = apiRouter;
