/**
 * Required External Modules
 */

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const errorHandler = require('../middleware/error');
const notFoundHandler = require('../middleware/notFound');

dotenv.config();

/**
 * App Variables
 */

const PORT = parseInt(process.env.PORT, 10) || 9000;

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(errorHandler);

/**
 * Define routes
 */

app.use('/api/block', require('../routes/index'));
app.use(notFoundHandler);
/**
 * Server Activation
 */

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
