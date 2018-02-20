var tasks = require('../tasks.json');

exports.view = function(req, res){
  console.log("You are at the TESTER page.");
  res.render('test', tasks);
};
