import { createToDo, render } from "./create-to-do.js";
import { blankProjectLoad } from "./blank-project-load.js";
import { initialdomManip, newToDo, addChecklist, submit } from "./dom-manip.js";
import flatpickr from "./flatpickr.js";

// Call blankProjectLoad on first land
// blankProjectLoad();

// Call DOM Manipulation module to control UI
initialdomManip();

// TODO: click event module HERE for todo and project creations
