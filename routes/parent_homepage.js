var tasks = require('../tasks.json');

let tasksker = tasks['tasks'];

let now = new Date();

let test = [];


for (let i=0; i < tasksker.length; i++) {
	let timer = tasksker[i].time;
	var timeSet = timer - now.getHours();
	timeSet = Math.abs(timeSet);
	test.push(timeSet);
}

let choice = test.indexOf(Math.min.apply(null, test));

let taskrh = {};
taskrh.taskrh = JSON.stringify(tasksker[choice]);

exports.viewParentHomepage = function(req, res){
  console.log("You are in the PARENT homepage");
  console.log(Object.keys(tasks)[1]);
  res.render('parent_homepage', taskrh);
};
