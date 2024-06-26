const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const port = 8085;


// Middleware to parse JSON and URL-encoded form bodies
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Import routes
const emailRoutes = require('./Email/email');
const accomRoutes = require('./Routes/accom');
const packageRoutes = require('./Routes/tours');
const destiRoutes = require('./Routes/Desti');
const ClientRoutes = require('./Routes/client');
const articleRoutes = require('./Routes/articleRoutes');

// Use routes
app.use(emailRoutes);
app.use('/accom',accomRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/desti', destiRoutes);
app.use('/api/client', ClientRoutes);
app.use('/api/articles', articleRoutes);



// Connect to MongoDB
mongoose.connect('mongodb+srv://backend4alex:alex4back@cluster0.ynblcok.mongodb.net/')
.then(() => {
    console.log('Connected to the database!');
})
.catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});


// Your route handlers and other middleware can now access parsed request bodies
// Example:
app.post('/example', (req, res) => {
    console.log(req.body); // This will contain the parsed JSON or form data
    res.send('Data received');
  });
  
  // Start the server
  app.listen(port, () => {
    console.log('Server is running on port ' + port);
  });