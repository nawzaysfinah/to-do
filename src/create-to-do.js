// Creatin an array for ToDo, if needed down the road
let toDoArray = [];

// Factory function to create todo list
export function createToDo(Title, Description, DueDate, Priority, Checklist) {
  // Take data from new To Do item
  console.log("Called createToDo module... creating todo now");

  let title = document.querySelector("#Title").value;
  let description = document.querySelector("#Description").value;
  let duedate = document.querySelector('input[type="datetime-local"]').value;
  let prioritySelector = document.querySelector("#Priority");
  let priority = prioritySelector.options[prioritySelector.selectedIndex].text;
  // let checklist = document.querySelector("#ul").value;

  Title = title;
  Description = description;
  DueDate = duedate;
  Priority = priority;
  // Checklist = checklist;

  console.log({ Title, Description, DueDate, Priority, Checklist });
  console.log("Pushing this object to the toDoArray....");

  // TODO: Remove below two lines of code if array is not needed
  toDoArray.push({ Title, Description, DueDate, Priority, Checklist });
  console.log(toDoArray);
  return { Title, Description, DueDate, Priority, Checklist };
}
