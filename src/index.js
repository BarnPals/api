// Node modules.
const app = require('express')();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { MongoClient } = require('mongodb');
// Relative imports.
const {
  DB_CLUSTER_NAME,
  DB_PASSWORD,
  DB_USER,
} = require('./env');

// =================
// CONSTANTS
// =================
const PORT = 3001;
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER_NAME}.mongodb.net/test?retryWrites=true&w=majority`;
// =================


// =================
// MIDDLEWARE
// =================
// Auto-parse request bodies.
app.use(bodyParser.json());

// Protect against web vulnerabilities. http://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());
app.disable('x-powered-by');
// =================


// =================
// CONNECT DATABASE
// =================
// Derive the database.
const db = new MongoClient(DB_URI, { useNewUrlParser: true });

// Connect to the database.
db.connect(err => {
  // Catch DB connection error.
  if (err) {
    console.error('DB connection error:', err);
  }

  // Close the db.
  db.close();
});
// =================


// =================
// ROUTING
// =================
// Add API routes.
app.use('/api', require('./controllers'));

// Catch all route handler.
app.get('/', (req, res) => {
  res.send('Hello World');
});
// =================


// =================
// START SERVER
// =================
app.listen(PORT, (err) => {
  // Catch start server error.
  if (err) {
    console.error('Error in app.listen:', err);
  }

  // Log the PORT we're running on.
  console.info(`Running server on PORT ${PORT}.`);
});
// =================
