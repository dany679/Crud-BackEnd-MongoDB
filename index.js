const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRouter = require('./routes/posts');
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});
const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

app.use('/posts', postRouter);

// app.get('/', (req, res) => {
//   res.send('hello world get');
// });

app.listen(5000);
