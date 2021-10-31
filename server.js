const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import Routes
const userRoutes = require('./routes/user');

const server = express();
dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to DB');
    }
  }
);

// Middlewares
server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// Routes Middlewares
server.use('/api/user', userRoutes);

server.get('/', (req, res) => {
  res.send('Hello AskBnB');
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server is started & listening at ${PORT}`);
});
