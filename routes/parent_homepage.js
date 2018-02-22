var tasks = require('../tasks.json');


exports.viewParentHomepage = function(req, res){
  console.log("You are in the PARENT homepage");
  console.log(Object.keys(tasks)[1]);
  res.render('parent_homepage', tasks);
};
