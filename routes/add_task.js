var tasks = require("../tasks.json");

exports.addTask = function(req, res){
  var name = req.query.name;
  var description = req.query.description;
  var time = req.query.time;
  var task_number = 0;

  var newTask =
  {
    "name": name,
    "description": description,
    "time": time,
    "task_number": task_number++
  }
  tasks.tasks.push(newTask);

  res.render('parent_homepage', tasks);
  console.log(task_number);
}
