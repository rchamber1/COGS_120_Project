exports.deleteTask = function(req, res){
  var data = require("../data.json");
  jsonstr = JSON.stringify(data)

  var index = req.params.index;
  data.tasks.splice(index,1);

  var fs = require('fs');
  fs.writeFile("../data.json", jsonstr, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });

  res.render('task_list', data);


  res.writeHead(302, {
    'Location': '/task_list'
    //add other headers here...
  });
  res.end();

}
