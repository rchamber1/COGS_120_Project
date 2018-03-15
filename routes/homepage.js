
exports.view = function(req, res){
  var data = require('../data.json');
  //data['viewAlt'] = false;

/*  var tasksker = data['tasks'];
  var taskrh = tasksker[0];*/

  console.log("You are on the homepage.");
  /*
  console.log(Object.keys(data)[1]);
  res.render('homepage', { taskrh: taskrh});
  */
  res.render('homepage', data);
};

/* alternate homepage testing code for archiving
exports.viewAlt = function(req, res) {
  var data = require('../data.json');
  data['viewAlt'] = true;
  res.render('homepage', data);
  console.log("You are on the alternate homepage.")

}*/
