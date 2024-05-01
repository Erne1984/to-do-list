import createTodoCard from './createTodoCard';
import { ToDo } from '../logic/todoObject';

import projectsArray from './projectsArray';

let initialArray = projectsArray();

initialArray[0].addTodo(new ToDo("Python", "Fazer o cruso da alura", "24-08-2024"))

export function initTodoContent(titleTodo) {
    const todoListContent = document.querySelector("#list-todo-content");
    const todoCardDom = document.querySelector('.todo-card');
    const noTaskMsg = document.querySelector('.no-task');

    if (initialArray.some(project => project.nome === titleTodo)) {
        initialArray.forEach((project) => {
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