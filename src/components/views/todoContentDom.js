import createTodoCard from './createTodoCard';
import { ToDo } from '../logic/todoObject';

import projectsArray from './projectsArray';



export function initTodoContent() {
    const todoListContent = document.querySelector("#list-todo-content");
    const todoCardDom = document.querySelector('.todo-card');
    const noTaskMsg = document.querySelector('.no-task');

    if (projectsArray.length != 0) {
        projectsArray.forEach((project) => {
            project.todos.forEach((todo) => {

                const todoCard = createTodoCard(todo.title, todo.description, todo.dueDate);

                todoListContent.innerHTML += todoCard;

            })
        })
    }

    if (todoCardDom == null) {
        noTaskMsg.classList.toggle('none');
    }
}