var tasks = require('../tasks.json');

exports.viewParentHomepage = function(req, res){

  console.log("You are in the PARENT homepage");
  res.render('parent_homepage', tasks);
};
