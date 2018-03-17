var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

var OrganisationController = require('./organisation/OrganisationController');
app.use('/api/org',OrganisationController);

var PostController = require('./post/PostController');
app.use('/api/post',PostController)

module.exports = app;
