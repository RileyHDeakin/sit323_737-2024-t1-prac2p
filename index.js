//importing the Express.js framework
const express = require('express');
//importing path module for dealing with directory paths
const path = require('path');
//setting 'app' to the instance of the express application
const app = express();

//mounting to the static file using a path to index.html
app.use(express.static(path.join(__dirname, 'public')));

//when user gets route path the application sends index.html
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//configures server to listen on port 3000 then logs message
app.listen(3000, () => {
    console.log("Server successfully running on port 3000");
  });