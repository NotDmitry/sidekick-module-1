const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send('Welcome to the first Node.js app!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})