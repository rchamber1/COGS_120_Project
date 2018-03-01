
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function deleteTask(e){
	e.preventDefault();
	window.location.href = "./delete_task";
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("page loaded");
  $('#delete').click(deleteTask);
}
