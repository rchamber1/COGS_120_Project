var data = require("../data.json");

exports.createAccount = function(req, res){
  var username = req.query.username;
  var password = req.query.password;
  var email = req.query.email;

  var newUser =
  {
    "username": username,
    "password": password,
    "email": email
  }
  data.user.push(newUser);

  res.render('profile', data);
}
