import { projectsArray } from "../../index";

export default function saveProjectsArrayToLocalStorage() {
    const projectsArrayString = JSON.stringify(projectsArray);
    localStorage.setItem('projectsArray', projectsArrayString);
}