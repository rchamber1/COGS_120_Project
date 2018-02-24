var data = require('../data.json');



exports.view = function(req, res){
  var username = req.params.username;
//  var password = req.params.password;
  var email = req.params.email;

  console.log("Viewing My Profile");
  res.render('profile', {
    "username": username,
    "email": email
  });
};
