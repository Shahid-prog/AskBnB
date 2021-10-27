const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, '/client/build')));

server.get('/', (req, res) => {
  res.send('Testing CI pipeline');
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server is started & listening at ${PORT}`);
});
