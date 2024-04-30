import Project from "../logic/projectObject";
import ToDo from "../logic/todoObject";
import projectItem from "./projectItem";

export function initAddProject() {
    const addProjectForm = document.querySelector(".add-project-box");
    const addProjectBtn = document.querySelector("#add-project");
    const btnCancelAddProject = document.querySelector("#btn-confirm-cancel-project");
    const btnConfirmAddProject = document.querySelector("#btn-confirm-add-project");

    addProjectBtn.addEventListener("click", () => {
        addProjectForm.classList.remove("none");
    });

    btnCancelAddProject.addEventListener("click", () => {
        const inputNameProject = document.querySelector("#input-project");
        inputNameProject.value = "";
        addProjectForm.classList.add("none");
    });

    btnConfirmAddProject.addEventListener("click", () => {
        const inputNameProject = document.querySelector("#input-project");
        if (inputNameProject.value.trim() === "") {
            alert("Nome do projeto não pode ser vazio");
        } else {
            const projectContainer = document.querySelector(".projects");
            const projectHTML = projectItem(inputNameProject.value);
            projectContainer.appendChild(projectHTML);
            const addProjectForm = document.querySelector(".add-project-box");
            addProjectForm.classList.add('none');
            inputNameProject.value = '';
        }
    });
}