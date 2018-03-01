var data = require("../data.json");

exports.addTask = function(req, res){
  var name = req.query.name;
  var description = req.query.description;
  var time = req.query.time;
  var image = req.query.image;
  var index = data.tasks.length;

  var newTask =
  {
    "name": name,
    "description": description,
    "time": time,
    "image": image,
    "index": index
  }
  data.tasks.push(newTask);

  res.render('task_list', data);
  //console.log(index);
}
