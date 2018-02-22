
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var parent_homepage = require('./routes/parent_homepage');
var add_task = require('./routes/add_task');
var delete_task = require('./routes/delete_task');
var task_list = require('./routes/task_list');
var task = require('./routes/task');

//TEST variable created for testing concepts
//var test= require('./routes/test');

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

app.get('/', index.view);
app.get('/parent_homepage', parent_homepage.viewParentHomepage)
app.get('/add_task', add_task.addTask);
//app.get('/delete_task/:name/:description/:time', delete_task.deleteTask)
app.get('/task_list', task_list.view);
app.get('/task/:name/:description/:time', task.view);

//TEST route created for testing concepts
//app.get('/test', test.view)

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
