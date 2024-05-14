const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
// const uuid = require('./helpers/uuid');


const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

















// // Import express, path and initialize instance of express
// const fs = require('fs')
// const express = require('express');
// const path = require('path');
// const app = express();

// // Specify on which port the Express.js server will run
// const PORT = 3001;

// //Middleware 
// app.use(express.static('public'));

// // Create Express.js routes for default '/', '/send' and '/routes' endpoints
// // app.get('*', (req, res) => 
// //     res.sendFile(path.join(__dirname, 'public/notes.html'))
// // );

// app.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// )

// app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
// );

// app.get('*', (req, res))




// // app.get('/routes', (req, res) =>
// //   res.sendFile(path.join(__dirname, 'public/routes.html'))
// // );

// // listen() method is responsible for listening for incoming connections on the specified port 
// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );