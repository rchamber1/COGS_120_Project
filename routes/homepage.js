

// var now = new Date();

// var test = [];


// for (var i=0; i < tasksker.length; i++) {
// 	var timer = tasksker[i].time;
// 	var timeSet = timer - now.getHours();
// 	timeSet = Math.abs(timeSet);
// 	test.push(timeSet);
// }
//
// var choice = test.indexOf(Math.min.apply(null, test));



exports.view = function(req, res){
  var data = require('../data.json');

  var tasksker = data['tasks'];
  var taskrh = tasksker[0];

  console.log("You are in the homepage.");
  console.log(Object.keys(data)[1]);
  res.render('homepage', { taskrh: taskrh});
};
