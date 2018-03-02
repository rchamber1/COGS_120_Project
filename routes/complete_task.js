exports.completeTask = function(req, res){
  var data = require("../data.json");
  var history = require("../completed_tasks.json");

  //turn data.tasks into string
  data_string = JSON.stringify(data);
  history_string = JSON.stringify(history);

  //get information from URL
  var name = req.params.name;
  var description = req.params.description;
  var time = req.params.time; //might not need time
  var image = req.params.image;
  var index = history.completed_tasks.length;

  //delete from data.tasks object first
  data.tasks.splice(index,1);

  //save task information from URL to a new object in completed_tasks object
  var newTask = {
    "name": name,
    "description": description,
    "time": time,
    "image": image,
    "index": index
  }

  history.completed_tasks.push(newTask);

  //update completed_tasks with string
  var fs1 = require('fs');
  fs1.writeFile("../completed_tasks.json", history_string, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The task was successfully added to history!");
  });

  //update data.tasks object with string (line 5)
  var fs = require('fs');
  fs.writeFile("../data.json", data_string, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("Task successfully deleted!");
  });

  //render the task list with the new object data
  res.render('task_list', data);
  //render the task history with the objects
  res.render('task_history', history);

  //redirect to task list
  res.writeHead(302, {
    'Location': '/task_list'
    //add other headers here...
  });
  res.end();

}
