var data = require('../data.json');

exports.view = function(req, res){
  console.log("Viewing Task List");
  res.render('task_list', data);
};
