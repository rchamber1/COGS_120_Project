var data = require("../data.json");

exports.deleteTask = function(req, res){
  var name = reqs.param.name;
  var description = reqs.param.description;
  var time = reqs.param.time;

//$('#delete').click(delete);
  delete data[name,description,time];

  res.render('task_list', data);
}
