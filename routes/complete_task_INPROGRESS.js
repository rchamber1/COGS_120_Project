exports.completeTask = function(req, res){
  var data = require("../completed_tasks.json");

  //delete from task list
    var index = req.params.index;
    data.tasks.splice(index,1);

    var fs = require('fs');
    fs.writeFile("../data.json", jsonstr, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The task was removed from task list!");
    });

    //render new task list
    res.render('task_list', data);

    var length = data.completed_tasks.length;
    length++;
    console.log("length is: "+ length);

    res.writeHead(302, {
      'Location': '/task_list'
      //add other headers here...
    });
    res.end();

  }
