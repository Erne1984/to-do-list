import { ToDo } from './components/logic/todoObject';
import createTodoCard from './components/views/todoCard';
import { initAddProject } from './components/views/addProject';
import { initSidebar } from './components/views/sidebar';  
import { initTodoContent } from './components/views/todoContentDom';  


import './style.css'

const projects = [
    new ToDo("Estudar Inglês", "Praticar no curso de inglês", "2024-06-23", "high"),
    new ToDo("Exercício Físico", "Ir para a academia", "2024-05-23", "medium"),
    new ToDo("Programar", "Fazer o curso da alura", "2024-08-23", "low"),
];

initSidebar();  
initAddProject();

initTodoContent()