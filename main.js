
// Creat an empty array to push in it what the user put in the input text as an object.
var todos= [];

// Now we need to jQuery to call our page with its functions.
$(document).ready(function() {
    console.log( "ready!" );
    var inputTodo = document.getElementById('inputTodo');
    $('#add').on('click', function(){
      // Here we alert user if he click on the add button without isert any todo.
      if(inputTodo.value === ""){
        alert("Please add something")
      } else {
        // each time user isert to do it will creat an object with its keys and value
    var obj = {
      "task" : inputTodo.value,
		  "complete" : false,
      "class" : "" + todos.length
        };
        // here we push the object we created inside the todos array.
         todos.push(obj)
         // Now we append the input value inside the ul as li and isert with it two buttons (complete and remove) and these buttons have class and id created directly from obj.class.
          $("#makeLi").append("<li class = " + obj.class + " > " + obj.task + " <br><button class= 'complete' id = " +'complete'+ obj.class + " > complete </button> <button class= 'remove' id = " +'remove'+ obj.class + " > remove </button></li>");

            }
   
      // Here we add event for each button(complete, remove).
      // complete when clicked it will return its css to be green.
    $(".complete").on("click", function(event){
      var btnInfo = event.target.id
      console.log(btnInfo)
      for (var i = 0; i < todos.length; i++) {
        if(todos[i]["class"] === btnInfo.substring(8)){
          todos[i]["complete"] = true;
          $("." + btnInfo.substring(8)).css('color', 'green')
      }
        }

    });

     // remove button when clicked it will display it from the list and splice the whole object hold this class number from the todos array.

    $(".remove").on("click", function(event){
      var btnInfo = event.target.id
      console.log(btnInfo)
      for (var i = 0; i < todos.length; i++) {
        if(todos[i]["class"] === btnInfo.substring(6)){
          $("." + btnInfo.substring(6)).css('display', 'none')
            todos.splice(i,1)
        }

      }

    });

    })

});


 
