
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//homepage variables
var index = require('./routes/index');
var homepage = require('./routes/homepage');

//task variables
var add_task = require('./routes/add_task');
var edit_task = require('./routes/edit_task');
var delete_task = require('./routes/delete_task');
var task_list = require('./routes/task_list');
var task = require('./routes/task');
var complete_task = require('./routes/complete_task');
var task_history = require('./routes/task_history');
var create_task = require('./routes/create_task');

//account and login variables
var create_account = require('./routes/create_account');
var login = require('./routes/login');
var profile = require('./routes/profile')


//TEST variable created for testing concepts
var test= require('./routes/test');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//homepage routes
app.get('/', index.view);
app.get('/viewAlt', index.viewAlt);
app.get('/homepage', homepage.view);

//account and profile routes
app.get('/homepage_alt', homepage.viewAlt);
app.get('/create_account', create_account.createAccount);
app.get('/login', login.login);
app.get('/profile', profile.view)

//task routes
app.get('/add_task', add_task.addTask);
app.get('/edit_task/:index', edit_task.editTask);
app.get('/delete_task/:index', delete_task.deleteTask);
app.get('/task_list', task_list.view);
app.get('/task/:name/:description/:time/:index', task.view);
app.get('/create_task', create_task.view);
app.get('/complete_task/:index', complete_task.completeTask);
app.get('/task_history', task_history.view);

//TEST route created for testing concepts
app.get('/test', test.view)

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
