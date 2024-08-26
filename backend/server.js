const express = require('express');
const notes =  require('./data/notes');
const dotenv =  require('dotenv');

const app = express();
dotenv.config(); 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Api is running");
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((x)=> x._id === req.params.id);
    res.json(note);
})

app.listen(port, ()=>{
    console.log(`Port running at ${port}`);
})