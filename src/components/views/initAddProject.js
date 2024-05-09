import Project from "../logic/projectObject";
import projectItem from "./projectItem";
import { projectsArray } from '../../index';
import saveProjectsArrayToLocalStorage from "./saveToLocalStorage";

export function initAddProject() {
    const projectContainer = document.querySelector(".projects");
    const addProjectForm = document.querySelector(".add-project-box");
    const addProjectBtn = document.querySelector("#add-project");
    const btnCancelAddProject = document.querySelector("#btn-confirm-cancel-project");
    const btnConfirmAddProject = document.querySelector("#btn-confirm-add-project");

    if (projectsArray.length != 0) {
        projectsArray.forEach((project) =>{
            const projectHTML = projectItem(project.nome);
            projectContainer.appendChild(projectHTML);
        });
    }

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
            const newProject = new Project(inputNameProject.value);
            projectsArray.push(newProject); 
            console.log("Novo projeto adicionado:", newProject); 
            console.log("Array de projetos atualizado:", projectsArray);  

            saveProjectsArrayToLocalStorage();

            const projectHTML = projectItem(inputNameProject.value);
            projectContainer.appendChild(projectHTML);
            const addProjectForm = document.querySelector(".add-project-box");
            addProjectForm.classList.add('none');
            inputNameProject.value = '';
        }
    });
}
