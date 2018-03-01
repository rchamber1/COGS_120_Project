exports.editTask = function(req, res){
  var data = require("../data.json");
  jsonstr = JSON.stringify(data);

  var name = req.query.name;
  var description = req.query.description;
  var time = req.query.time;
  var image = req.query.image;
  var index = req.query.index;

//delete task in index first?

//put in new task
  var newTask =
  {
    "name": name,
    "description": description,
    "time": time,
    "image": image,
    "index": index
  }
  data.tasks.push(newTask);

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
