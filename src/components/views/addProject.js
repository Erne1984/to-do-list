import Project from "../logic/projectObject";
import ToDo from "../logic/todoObject";
import projectItem from "./projectItem";

export function initAddProject() {
    const projectContainer = document.querySelector(".projects");
    const addProjectForm = document.querySelector(".add-project-box");
    const addProjectBtn = document.querySelector("#add-project");

    addProjectBtn.addEventListener("click", () => {
        addProjectForm.classList.remove("none");
    });

    const btnConfirmAddProject = document.querySelector("#btn-confirm-add-project");
    const btnCancelAddProject = document.querySelector("#btn-confirm-cancel-project");

    btnConfirmAddProject.addEventListener("click", () => {
        const inputNameProject = document.querySelector("#input-project");
        if (inputNameProject.value == "") {
            alert("Nome do projeto não pode ser vazio");
        } else {
            const projectHTML = projectItem(inputNameProject.value);  
            const newProject = document.createElement("div");  
            newProject.innerHTML = projectHTML; 
            projectContainer.appendChild(newProject);
            addProjectForm.classList.add("none");
            inputNameProject.value = "";
        }
    });

    btnCancelAddProject.addEventListener("click", () => {
        const inputNameProject = document.querySelector("#input-project");
        inputNameProject.value = "";
        addProjectForm.classList.add("none");
    });
}
