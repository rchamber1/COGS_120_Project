

exports.view = function(req, res){
  var data = require('../data.json');
  console.log("Viewing Task List");
  res.render('task_list', data);
};
