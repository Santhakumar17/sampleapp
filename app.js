const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the simple Node.js app!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
