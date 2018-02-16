var tasks = require("../tasks.json");

exports.addTask = function(req, res){
  var name = req.query.name;
  var description = req.query.description;
  var time = req.query.time;

  var newTask =
  {
    "name": name,
    "description": description,
    "time": time
  }
  tasks.tasks.push(newTask);

  res.render('parent_homepage', tasks)
}
