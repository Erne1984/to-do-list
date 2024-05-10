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
        const projectName = projectItem.querySelector(".list-element");
        const inputNewTitle = document.querySelector("#new-project-name");
        const currentIndexProject = projectsArray.findIndex((project) => project.nome == projectName.textContent);
        indexProject = currentIndexProject;

        inputNewTitle.value = projectsArray[indexProject].nome;

        const modal = document.querySelector("#edit-project-dialog");
        const cancelModalBtn = document.querySelector("#btn-cancel-edit-project");
        const confirmModalBtn = document.querySelector("#btn-confirm-edit-project");

        cancelModalBtn.removeEventListener("click", handleBtnCancelEditProject);
        cancelModalBtn.addEventListener("click", handleBtnCancelEditProject);

        const functionHandleBtnEditProject = handleBtnEditProject(projectName, inputNewTitle);

        confirmModalBtn.removeEventListener("click", functionHandleBtnEditProject);
        confirmModalBtn.addEventListener("click",  functionHandleBtnEditProject); 

        modal.show();
    }

    function handleBtnCancelEditProject(e){
        const target = e.target;
        const modal = target.closest("#edit-project-dialog");
        modal.close();
    }

    function handleBtnEditProject(projectName ,inputNewTitle){  
        return function(e){ 
            const target = e.target;

            const modal = target.closest("#edit-project-dialog");

            projectsArray[indexProject].nome = inputNewTitle.value;

            projectName.textContent = inputNewTitle.value;

            modal.close();

            saveProjectsArrayToLocalStorage();
            location.reload()
        }
    }

}
