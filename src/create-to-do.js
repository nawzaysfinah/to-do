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
  console.log("New object pushed to toDoArray...", toDoArray);
  render();
  return { Title, Description, DueDate, Priority, Checklist };
}

export function render() {
  let entryEL = document.querySelector(".entries");
  entryEL.innerHTML = "";
  // console.log(
  //   `You have a new task titled ${Title.value} that requires you to ${Description.value}. This is of ${Priority} importance and must be done by ${DueDate}`
  // );
  for (let i = 0; i < toDoArray.length; i++) {
    let toDo = toDoArray[i];
    let toDoEL = document.createElement("div");
    toDoEL.setAttribute("id", "todo");
    toDoEL.setAttribute("class", "todo-card");
    toDoEL.innerHTML = `
    <div class="card-header">
      <h3 class="title">${toDo.Title}</h3><br>
      <h5 class="description">${toDo.Description}</h5><br>
    </div>
      <div class="card-body">
        <p>${toDo.DueDate}</p><br>
        <p>${toDo.Priority}</p><br>
      </div>`;
    entryEL.appendChild(toDoEL);
  }
}
