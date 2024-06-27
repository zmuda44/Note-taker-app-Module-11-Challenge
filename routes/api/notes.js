const notes = require('express').Router();
const uuid = require('../../helpers/uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../../helpers/fsUtils');
const fs = require('fs')

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.log('get request made   ... ')
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for a new note
notes.post('/', (req, res) => {
  console.log('post reuqest is made....')
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
    res.error('Error in adding note');
  }
});

// Delete route for deleting a note
notes.delete('/:id', async (req, res) => {
  const noteId = req.params.id

  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    error ? console.log(error) : console.log('no notes retreived')
    let notesData = JSON.parse(data)
    for (note of notesData) {
      if(note.id == noteId) {
        notesData.splice(notesData.indexOf(note), 1);        
      }
    }

    return fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
      err ? console.log(err) : console.log(notesData)
    })   
  })

  res.redirect('/') 
}
)

module.exports = notes;















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



