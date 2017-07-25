// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
//  <p>Wrap things in ca$h</p>
//  <span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
//  <p>Learn JavaScript</p>
//  <span class="label">Remove</span>
// </li>


var addNewItem = function(item) {
  var todo = $("<li>");
  var todoText = $("<p>");
  var todoLabel = $("<span>");

  todo.addClass("item").addClass("todo");
  todoText.html(item);
  todoLabel.html("Mark as Done");
  todoLabel.addClass("label");

  todo.append(todoText).append(todoLabel);

  $("#todo-column .item-list").append(todo);
};

// Move all items from "Todo" to "Done"

var completeAll = function() {
  var doneColumn = $("#done-column .item-list");
  var todoItems = $(".item.todo");

  todoItems.find(".label").html("Remove");
  todoItems
    .removeClass("todo")
    .addClass("done")
    .appendTo(doneColumn);
};

// Remove all items from "Done"

var clearAll = function() {
  $("#done-column .item-list").empty();
};

// Render Starting items

var todoItems = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var doneItems = [
  "Eat pizza",
  "Save the universe"
];

var renderAllItems = function(itemsToRender) {
  for(var i = 0; i < doneItems.length; i++) {
    addNewItem(doneItems[i]);
  }

  completeAll();

  for(var i = 0; i < todoItems.length; i++) {
    addNewItem(todoItems[i]);
  }
};

// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

// //var removeItem = function(itemNumber) {
//   $(".item.done").eq(itemNumber).remove();
// };

// // Mark a single item as Done

// var markAsDone = function(itemNumber) {
//   var doneColumn = $("#done-column .item-list");

//   var todoItem = $(".item.todo").eq(itemNumber)

//   todoItem.find(".label").html("Remove");
//   todoItem
//     .removeClass("todo")
//     .addClass("done")
//     .appendTo(doneColumn);
// };

renderAllItems();

// ================== EVENTS =====================

$(".clear-todo").click(function() {
  completeAll();
});

$(".clear-done").click(function() {
  clearAll();
});

$("#new-item-button").click(function() {
  var newTask = $("#new-item-text").val();

  addNewItem(newTask);
});


//Removing Tasks
/* 
$("#done-column .label").click(function(){
  $(this).remove();
}
*/

/* <li class="item-done">
<p>Feed the dog</p>
<span class="label">Remove</span>
</li>
*/


$("#done-column .label").click(function(){
  
  $(this).closest("li.").remove();
}


//When I remove the Mark As Done labels, console.log the message "Tried to finish something" :


$("#todo-column .label").click(function){
    
    console.log("Tried to Finish something")
}

//When i click the Mark as Done labels

//Remove the list item from the page
//Instead of removing the list item
//move the list item to the done column
//$(this).closest("item").remove();

//$("#todo-column .label").click(function() {
    //var label = $(this);
    //var item = label.closest(".item");

 //Remove the "todo" class from the item 
//add the "done" class to the item 
 // change the label text "mark as done" to "Remove"

//item.appendTo("#done-column .item-list")
//item.find(".label").html("remove")


$("#done-column").on("click", ".label", function(){
  $(this).closest(".item").remove();
});


$("#todo-column").on("click" ,".lable." function() {
    var label = $(this);
    var item = label.closest(".item");

item.remove()

item.removeClass("todo");
item.addClass("done");
label.html("Remove");

item.appendTo("#done-column .itme-list");



// click the enter key instead of "add item"
// after adding a new item remove the text from the "add new item box"
// shouldn't be able to add items with no text 











