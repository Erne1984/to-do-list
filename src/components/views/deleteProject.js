import { projectsArray } from "../../index";
import saveProjectsArrayToLocalStorage from "./saveToLocalStorage";

export function deleteProject() {

    const deleteIcons = document.querySelectorAll(".delete-icon-project");

    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.removeEventListener("click", handleDeleteProject);
        deleteIcon.addEventListener("click", handleDeleteProject);
    })

    function handleDeleteProject(e){

        const target = e.target

        const projectElement = target.closest(".project");
        const projectName = projectElement.querySelector(".list-element");

        const indexProject = projectsArray.findIndex((project) => project.nome == projectName.textContent);

        projectsArray.splice(indexProject, 1);
        projectElement.remove();

        saveProjectsArrayToLocalStorage();
        
    }
}