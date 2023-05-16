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
  const projectsInfoDiv = document.createElement("h3");
  projectsInfoDiv.setAttribute("id", "projects");

  projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
  var title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("id", "Title");
  title.setAttribute("placeholder", "what's the task?");

  contentDiv.appendChild(entryDiv);
  entryDiv.appendChild(projectsInfoDiv);
  entryDiv.appendChild(title);
}
