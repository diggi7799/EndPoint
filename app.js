const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let data = [];

// GET method to retrieve data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// POST method to add data
app.post('/api/data', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// DELETE method to remove data
app.delete('/api/data', (req, res) => {
  data = [];
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
