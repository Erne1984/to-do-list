import { projectsArray } from '../../index';
import createTodoCard from "./createTodoCard";
import getSelectedItem from './getSelectedItem';
import { ToDo } from "../logic/todoObject";
import { initTodoContent } from './todoContentDom';

let showFormClickListener = null;
let addFormClickListener = null;
let cancelFormClickListener = null;

export function formAddTodo() {
    const titleTodo = document.querySelector(".title-content");
    const todoCardDom = document.querySelector('.list-todo');
    const showForm = document.querySelector(".show-form-todo");
    const formAddTodo = document.querySelector(".form-add-todo");
    const inputTitle = document.querySelector("#input-title");
    const inputDescription = document.querySelector("#input-descri");
    const inputDate = document.querySelector("#input-date");
    const addForm = document.querySelector("#btn-confirm-addToDo");
    const cancelForm = document.querySelector("#btn-cancel-addToDo");

    let isProjectFound = false;
    projectsArray.forEach((project) => {
        if (project.nome === titleTodo.textContent) {
            isProjectFound = true;
        }
    });

    if (isProjectFound) {
        showForm.classList.remove("none");
    } else {
        showForm.classList.add("none");
    }

    if (showFormClickListener) {
        showForm.removeEventListener("click", showFormClickListener);
    }
    if (addFormClickListener) {
        addForm.removeEventListener("click", addFormClickListener);
    }
    if (cancelFormClickListener) {
        cancelForm.removeEventListener("click", cancelFormClickListener);
    }

    showFormClickListener = () => {
        if (isProjectFound) {
            formAddTodo.classList.remove("none");
        }
    };
    showForm.addEventListener("click", showFormClickListener);

    addFormClickListener = () => {
        const newTodo = new ToDo(inputTitle.value, inputDescription.value, inputDate.value);
        const selectedProjectName = getSelectedItem();
        const selectedProject = projectsArray.find(project => project.nome === selectedProjectName);
        selectedProject.todos.push(newTodo); 
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = createTodoCard(newTodo.title, newTodo.description, newTodo.dueDate);
        todoCardDom.appendChild(tempDiv);
        formAddTodo.classList.add("none");
        inputTitle.value = "";
        inputDescription.value = "";
        inputDate.value = "";
        initTodoContent();
    };
    addForm.addEventListener("click", addFormClickListener);

    cancelFormClickListener = () => {
        formAddTodo.classList.add("none");
    };
    cancelForm.addEventListener("click", cancelFormClickListener);
}
