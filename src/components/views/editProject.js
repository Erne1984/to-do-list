import { projectsArray } from "../../index";
import saveProjectsArrayToLocalStorage from "./saveToLocalStorage";

export function editProject(){

    const editIcons = document.querySelectorAll(".edit-icon-project");

    editIcons.forEach((editIcon) => {
        editIcon.removeEventListener("click", handleEditProject);
        editIcon.addEventListener("click", handleEditProject);
    })

    let indexProject = "";
    function handleEditProject(e){
        const target = e.target;

        const projectItem = target.closest(".project");
        const projectName = projectItem.querySelector(".list-element").textContent;
        const currentIndexProject = projectsArray.findIndex((project) => project.nome == projectName);
        indexProject = currentIndexProject;

        const modal = document.querySelector("#edit-project-dialog");
        const cancelModalBtn = document.querySelector("#btn-cancel-edit-project");
        const confirmModalBtn = document.querySelector("#btn-confirm-edit-project");

        cancelModalBtn.removeEventListener("click", handleBtnCancelEditProject);
        cancelModalBtn.addEventListener("click", handleBtnCancelEditProject);

        confirmModalBtn.removeEventListener("click", handleBtnEditProject);
        confirmModalBtn.addEventListener("click", handleBtnEditProject);

        modal.show();
    }

    function handleBtnCancelEditProject(e){
        const target = e.target;
        const modal = target.closest("#edit-project-dialog");
        modal.close();
    }

    function handleBtnEditProject(e){
        const target = e.target;

        const modal = target.closest("#edit-project-dialog");
        const inputNewTitle = document.querySelector("#new-project-name");

        console.log(projectsArray[indexProject].nome);

        console.log(inputNewTitle)

        inputNewTitle.value = projectsArray[indexProject].nome;

        //projectsArray[indexProject].nome = inputNewTitle.value;

        //modal.close();

        //saveProjectsArrayToLocalStorage();
    }

}