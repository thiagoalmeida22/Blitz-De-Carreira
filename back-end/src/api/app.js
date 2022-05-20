const express = require('express');
const tasks = require('../routes/task');
const connection = require('../database/db');

const app = express();
connection();
app.use(express.json());
app.use('/tasks', tasks);

module.exports = app;