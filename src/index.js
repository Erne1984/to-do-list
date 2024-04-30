import { ToDo } from './components/logic/todoObject';
import createTodoCard from './components/views/todoCard';
import { initAddProject } from './components/views/addProject';
import { initSidebar } from './components/views/sidebar';  

import './style.css'

const projects = [
    new ToDo("Estudar Inglês", "Praticar no curso de inglês", "2024-06-23", "high"),
    new ToDo("Exercício Físico", "Ir para a academia", "2024-05-23", "medium"),
    new ToDo("Programar", "Fazer o curso da alura", "2024-08-23", "low"),
];

const todoListContent = document.querySelector("#list-todo-content");
const todoCardDom = document.querySelector('.todo-card');
const noTaskMsg = document.querySelector('.no-task');

const todoCard1 = createTodoCard("Estudar Algo", "Fazer o curso de alura", "23/11/2024");
todoListContent.innerHTML += todoCard1;

if (todoCardDom == null) {
    noTaskMsg.classList.toggle('none');
}

initSidebar();  
initAddProject();
