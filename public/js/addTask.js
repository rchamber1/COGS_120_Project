var counter = 1;
var limit = 3;
function addInput(divName){
     if (counter == limit)  {
          alert("You have so many tasks! (" + counter + ")");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Name " + (counter + 1) + " <input type='text' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}
