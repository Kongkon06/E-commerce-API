const express = require('express');
const User = require('./User');
const Admin = require('./Admin');
const Route = express.Router();

Route.post('/user',User);
Route.post('/admin',Admin);

module.exports = Route