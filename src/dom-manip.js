import { blankProjectLoad } from "./blank-project-load.js";
import { createToDo, render } from "./create-to-do.js";

// DOM manipulation to display the initial UI
export function initialdomManip() {
  const menu = document.querySelector(".menu");

  // DOM for the Heading
  const btn_newToDo = document.createElement("button");
  btn_newToDo.setAttribute("id", "newToDo");
  btn_newToDo.textContent = "☑️";

  menu.appendChild(btn_newToDo);
}

// DOM for pop-up for adding newToDo
export function newToDo() {
  //  define menu
  const menu = document.querySelector(".menu");

  //   DOM for the default project load
  const entryDiv = document.createElement("div");
  entryDiv.setAttribute("id", "entry");

  // DOM for Heading of entryDiv
  const projectsInfoDiv = document.createElement("h3");
  projectsInfoDiv.setAttribute("id", "projects");
  entryDiv.appendChild(projectsInfoDiv);

  // DOM for Title
  projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
  var title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("pattern", "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}");
  title.setAttribute("id", "Title");
  title.setAttribute("name", "Title");
  title.setAttribute("placeholder", "what are we doing?");
  title.textContent = "Title";
  entryDiv.appendChild(title);

  // DOM for Description
  var description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("id", "Description");
  description.setAttribute("placeholder", "what's does it entail?");
  description.textContent = "Description";
  entryDiv.appendChild(description);

  // DOM for Due Date
  var calendar = document.createElement("input");
  calendar.setAttribute("type", "datetime-local");
  calendar.setAttribute("name", "date");
  calendar.setAttribute("id", "DueDate");
  calendar.setAttribute("placeholder", "select date/time");
  calendar.textContent = "Due Date";
  entryDiv.appendChild(calendar);

  // DOM for Priority
  var priority = document.createElement("select");
  priority.setAttribute("name", "priority");
  priority.setAttribute("id", "Priority");
  priority.setAttribute("placeholder", "important?");
  entryDiv.appendChild(priority);

  // Options for Priority
  let placeholder = new Option("Priority?", "");
  priority.add(placeholder);
  let low = new Option("Low", "0");
  priority.add(low);
  let medium = new Option("Medium", "1");
  priority.add(medium);
  let high = new Option("High", "2");
  priority.add(high);

  // DOM for Checklist

  // create button
  var btn_addItem = document.createElement("button");
  btn_addItem.textContent = "Add to checklist!";
  btn_addItem.setAttribute("id", "addItem");

  // create input field
  var addInput = document.createElement("input");
  addInput.setAttribute("type", "text");
  addInput.setAttribute("id", "texto");
  addInput.setAttribute("placeholder", "add checkbox item");

  // create a ul for things to live in
  var ul = document.createElement("ul");
  ul.setAttribute("id", "ul");

  entryDiv.appendChild(btn_addItem);
  entryDiv.appendChild(addInput);
  entryDiv.appendChild(ul);

  // Add function to Add Item button
  btn_addItem.addEventListener("click", addChecklist);

  // add button to submit
  var btn_submit = document.createElement("button");
  btn_submit.textContent = "Submit";
  btn_submit.addEventListener("click", submit);
  entryDiv.appendChild(btn_submit);

  // append entry entryDiv to contentDiv
  menu.appendChild(entryDiv);
}

// DOM Manipulation to addCheckList
export function addChecklist() {
  let checkboxItem = document.querySelector("#texto").value;
  // if found empty or only spaces, then
  if (!/\S/.test(checkboxItem)) {
    console.log("there is nothing in the checkbox");
    return;
  } else {
    var li = document.createElement("li");
    li.setAttribute("id", "li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo[]";
    checkbox.id = "checkbox";

    li.appendChild(checkbox);

    var text = document.getElementById("texto");
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li);

    checkboxItem = null;
  }
}

// Function for Submit Button
export function submit() {
  // alert("submit button works!");
  event.preventDefault();
  createToDo();
  render();
  // Reset input to null after submitting to do task
  document.querySelector("#Title").value = null;
  document.querySelector("#Description").value = null;
  document.querySelector("#Priority").value = "";
  // document.querySelector("#texto").value = null;
  // document.querySelector("li").value = null;
}
