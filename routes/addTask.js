var tasks = require("../tasks.json");

exports.addTask = function(req, res){
  var name = req.query.name;
  var description = req.query.description;
  var task = {
    "name": name,
    "description": description,
    "image": ''
  }

  tasks.tasks.push(task);
  res.render('parent_homepage', 'tasks')
};
