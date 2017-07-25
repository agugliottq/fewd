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


var completeAll = function() {
  var doneColumn = $("#done-column .item-list");
  var todoItems = $(".item.todo");

  todoItems.find(".label").html("Remove");
  todoItems
    .removeClass("todo")
    .addClass("done")
    .appendTo(doneColumn);
};


var clearAll = function() {
  $("#done-column .item-list").empty();
};


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
