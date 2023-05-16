// Creatin an array for ToDo, if needed down the road
let toDoArray = [];

// Factory function to create todo list
export const createToDo = (
  Title,
  Description,
  DueDate,
  Priority,
  Checklist
) => {
  console.log("Called createToDo module... creating todo now");
  console.log({ Title, Description, DueDate, Priority, Checklist });
  console.log("Pushing this object to the toDoArray....");

  // TODO: Remove below two lines of code if array is not needed
  toDoArray.push({ Title, Description, DueDate, Priority, Checklist });
  console.log(toDoArray);
  return { Title, Description, DueDate, Priority, Checklist };
};
