var data = require('../data.json');

exports.view = function(req, res){
  var name = req.params.name;
  var description = req.params.description;
  var time = req.params.time;
  var image = req.params.image;

  console.log("You are on the ''" + name + "'' page.");
  res.render('task', {
    "name": name,
    "description": description,
    "time": time,
    "image": image
  });
};
