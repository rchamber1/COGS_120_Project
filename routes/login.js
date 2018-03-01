var data = require("../user.json");

exports.login = function(req, res){
  var username = req.query.username;
  var password = req.query.password;

  var newUser =
  {
    "username": username,
    "password": password,
  }

  if (data.user.length === 0) {
  data.user.push(newUser);
}
else if (data.user.length === 1) {
  data.user.splice(0,1);
  data.user.push(newUser);
}

  res.render('profile', data);

}
