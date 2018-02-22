var tasks = require('../tasks.json');

$(document).ready(function(){
  $('#txtURL').change(function () {
    $('#imgPreview').attr('src', $('#txtURL').val())
  })
})

exports.view = function(req, res){
  console.log("Viewing Task List");
  res.render('create_task.html', tasks);
};
