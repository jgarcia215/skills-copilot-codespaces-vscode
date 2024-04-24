// Importing the express library to create the server
const express = require('express');
// Initializing the express application
const app = express();

// Route handler for the home page to send a response 'Hello World!'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Setting the port number from the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Starting the server and logging the running port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
