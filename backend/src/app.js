require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//TODO: ****CONFIG PORT ****

app.set('port', process.env.PORT || 4000);

module.exports = app;