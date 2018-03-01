var data = require('../data.json');
var index = req.param.index;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log('page loaded');
  //$('#delete').click(deleteTask);
}

function deleteTask(e){
  e.preventDefault();
  console.log(index);
  data.tasks.splice(index,1);
}
