var tasks = require('../tasks.json');

exports.view = function(req, res){
  console.log("Viewing Task List");
  res.render('create_task.html', tasks);
};
