import { blankProjectLoad } from "./blank-project-load.js";

const contentDiv = document.querySelector(".content");

// DOM manipulation to display the UI components
export function initialdomManip() {
  // DOM for the Heading
  const heading = document.createElement("h1");
  const btn_newToDo = document.createElement("button");

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
  entryDiv.appendChild(title);

  // DOM for Description
  var description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("id", "Description");
  description.setAttribute("placeholder", "what's does it entail?");
  entryDiv.appendChild(description);

  // DOM for Due Date
  // how to add calendar
  var calendar = document.createElement("input");
  calendar.setAttribute("type", "datetime-local");
  calendar.setAttribute("name", "date");
  calendar.setAttribute("placeholder", "select date/time");
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

  // append entry entryDiv to contentDiv
  contentDiv.appendChild(entryDiv);
}
