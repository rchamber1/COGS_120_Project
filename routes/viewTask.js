var tasks = require('../tasks.json');

exports.viewTask = function(req, res){
  var name = req.params.name;
  console.log("Viewing task: " + name);
  res.render('viewTask', tasks);
};
