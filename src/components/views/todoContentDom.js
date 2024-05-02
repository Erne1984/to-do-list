import createTodoCard from './createTodoCard';
import { ToDo } from '../logic/todoObject';
import projectsArray from './projectsArray';

let arrayProjects = projectsArray();

arrayProjects[0].addTodo(new ToDo("Python", "Fazer o curso da Alura", "24-08-2024"));

export function initTodoContent(selectElement) {
    const todoCardDom = document.querySelector('.todo-card');
    const noTaskMsg = document.querySelector('.no-task');
    const titleTodo = document.querySelector('.title-content');

    if (!todoCardDom == null) {
        noTaskMsg.classList.add('none');
    } else {
        noTaskMsg.classList.remove('none');
    }
}
