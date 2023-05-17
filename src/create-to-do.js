// Creatin an array for ToDo, if needed down the road
let toDoArray = [];

// Factory function to create todo list
export function createToDo(Title, Description, DueDate, Priority, Checklist) {
  // Take data from new To Do item
  console.log("Called createToDo module... creating todo now");

  // let title = document.querySelector("#Title").value;
  // let description = document.querySelector("#Description").value;
  // let duedate = document.querySelector("#DueDaTe").value;
  // let priority = document.querySelector("Priority").value;
  // let checklist = document.querySelector("#ul").value;

  // Title = title;
  // Description = description;
  // DueDate = duedate;
  // Priority = priority;
  // Checklist = checklist;

  console.log({ Title, Description, DueDate, Priority, Checklist });
  console.log("Pushing this object to the toDoArray....");

  // TODO: Remove below two lines of code if array is not needed
  toDoArray.push({ Title, Description, DueDate, Priority, Checklist });
  console.log(toDoArray);
  return { Title, Description, DueDate, Priority, Checklist };
}
