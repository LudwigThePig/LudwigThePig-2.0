require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(port, err => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);