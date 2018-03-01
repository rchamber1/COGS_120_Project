var data = require("../data.json");

exports.deleteTask = function(req, res){
  var index = req.params.index;
  index = parseInt(index);

  data.tasks.splice(index,1);

  res.render('task_list', data);
  console.log("deleting task");
}
