require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//TODO: ****CONFIG PORT ****
app.set('port', process.env.PORT || 4000);
//TODO: ****CONFIG HOST ****
app.set('host', process.env.HOST || '0.0.0.0')

//TODO: ******CONFIG MIDDLEWARES********
app.use(cors());
app.options('*', cors());
app.use(express.json());

//TODO: ******ROUTES***********
app.use('/api/files/data', require('./routes/csv')),

module.exports = app;