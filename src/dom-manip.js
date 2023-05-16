import { blankProjectLoad } from "./blank-project-load.js";

const contentDiv = document.querySelector(".content");

// DOM manipulation to display the UI components
export function initialdomManip() {
  // DOM for the Heading
  const heading = document.createElement("h1");
  const btn_newToDo = document.createElement("button");
  btn_newToDo.setAttribute("id", "newToDo");

  btn_newToDo.textContent = "☑️";
  btn_newToDo.addEventListener("click", newToDo);

  heading.textContent = "To Do 📒";
  contentDiv.appendChild(heading);
  contentDiv.appendChild(btn_newToDo);
}

export function newToDo() {
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
  // how to add calendar
  var calendar = document.createElement("input");
  calendar.setAttribute("type", "datetime-local");
  calendar.setAttribute("name", "date");
  calendar.setAttribute("placeholder", "select date/time");
  calendar.textContent = "Due Date";
  entryDiv.appendChild(calendar);

  // DOM for Priority
  var priority = document.createElement("select");
  priority.setAttribute("name", "priority");
  priority.setAttribute("placeholder", "important?");
  entryDiv.appendChild(priority);

  // Options for Priority
  let low = new Option("Low", "0");
  priority.add(low);
  let medium = new Option("Medium", "1");
  priority.add(medium);
  let high = new Option("High", "2");
  priority.add(high);

  // DOM for Checklist
  // create button
  var btn_addItem = document.createElement("button");
  btn_addItem.textContent = "Add Item!";
  btn_addItem.setAttribute("id", "addItem");
  // create input field
  var addInput = document.createElement("input");
  addInput.setAttribute("type", "text");
  addInput.setAttribute("id", "texto");
  // create a ul for things to live in
  var ul = document.createElement("ul");
  ul.setAttribute("id", "ul");

  entryDiv.appendChild(btn_addItem);
  entryDiv.appendChild(addInput);
  entryDiv.appendChild(ul);

  // var ul = document.createElement("ul");
  // entryDiv.appendChild(ul);

  btn_addItem.addEventListener("click", addChecklist);

  // append entry entryDiv to contentDiv
  contentDiv.appendChild(entryDiv);
}

// DOM Manipulation to addCheckList
export function addChecklist() {
  var li = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";

  li.appendChild(checkbox);

  var text = document.getElementById("texto");
  li.appendChild(document.createTextNode(text.value));
  ul.appendChild(li);
}
