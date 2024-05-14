const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
  };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;















// app.post('/api/reviews', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a review`);

//   // Destructuring assignment for the items in req.body
//   const { product, review, username } = req.body;

//   // If all the required properties are present
//   if (product && review && username) {
//     // Variable for the object we will save
//     const newReview = {
//       product,
//       review,
//       username,
//       review_id: uuid(),
//     };

//     // Obtain existing reviews
//     fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // Convert string into JSON object
//         const parsedReviews = JSON.parse(data);

//         // Add a new review
//         parsedReviews.push(newReview);

//         // Write updated reviews back to the file
//         fs.writeFile(
//           './db/reviews.json',
//           JSON.stringify(parsedReviews, null, 4),
//           (writeErr) =>
//             writeErr
//               ? console.error(writeErr)
//               : console.info('Successfully updated reviews!')
//         );
//       }
//     });

//     const response = {
//       status: 'success',
//       body: newReview,
//     };

//     console.log(response);
//     res.status(201).json(response);
//   } else {
//     res.status(500).json('Error in posting review');
//   }
// });

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT}`)
// );















// GET Route for a specific tip
// tips.get('/:tip_id', (req, res) => {
//   const tipId = req.params.tip_id;
//   readFromFile('./db/tips.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       const result = json.filter((tip) => tip.tip_id === tipId);
//       return result.length > 0
//         ? res.json(result)
//         : res.json('No tip with that ID');
//     });
// });

// DELETE Route for a specific tip



