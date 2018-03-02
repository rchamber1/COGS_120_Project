exports.view = function(req, res){
  var data = require('../completed_tasks.json');
  console.log("Viewing your task history.");
  res.render('task_history', data);
};
