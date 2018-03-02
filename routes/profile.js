

exports.view = function(req, res){
var user = require('../user.json');
var history = require('../completed_tasks.json');
var length = history.completed_tasks.length;

  console.log("Viewing my profile.");
  //res.render('profile', user);

  res.render('profile', {
    "length": length,
    user
  });
};
