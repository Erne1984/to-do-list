import projectsArray from "./projectsArray";
import createTodoCard from "./createTodoCard";
import { ToDo } from "../logic/todoObject";

export function formAddTodo() {
    const titleTodo = document.querySelector(".title-content");
    const todoCardDom = document.querySelector('.list-todo');
    const showForm = document.querySelector(".show-form-todo");
    const formAddTodo = document.querySelector(".form-add-todo");
    const inputTitle = document.querySelector("#input-title");
    const inputDescription = document.querySelector("#input-description");
    const inputDate = document.querySelector("#input-date");
    const addForm = document.querySelector("#btn-confirm-addToDo");
    const cancelForm = document.querySelector("#btn-cancel-addToDo");

    let isProjectFound = false;
    projectsArray().forEach((project) => {
        if (project.nome === titleTodo.textContent) {
            isProjectFound = true;
        }
    });

    if (isProjectFound) {
        showForm.classList.remove("none");
    } else {
        showForm.classList.add("none");
    }

    showForm.addEventListener("click", () => {
        if (isProjectFound) {
            formAddTodo.classList.remove("none");
        }
    });

    addForm.addEventListener("click", () => {
        const newTodo = new ToDo(inputTitle.value, inputDescription.value, inputDate.value);
        projectsArray().push(newTodo)
        const todoCardHTML = createTodoCard(newTodo.title, newTodo.description, newTodo.dueDate);
        todoCardDom.appendChild(todoCardHTML);
    });

    cancelForm.addEventListener("click", () => {
        formAddTodo.classList.add("none");
    });
}
