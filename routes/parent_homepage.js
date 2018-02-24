var data = require('../data.json');

var tasksker = data['tasks'];

var now = new Date();

var test = [];


for (var i=0; i < tasksker.length; i++) {
	var timer = tasksker[i].time;
	var timeSet = timer - now.getHours();
	timeSet = Math.abs(timeSet);
	test.push(timeSet);
}

var choice = test.indexOf(Math.min.apply(null, test));

var taskrh = tasksker[choice];

exports.viewParentHomepage = function(req, res){
  console.log("You are in the PARENT homepage");
  console.log(Object.keys(data)[1]);
  res.render('parent_homepage', { taskrh: taskrh});
};
