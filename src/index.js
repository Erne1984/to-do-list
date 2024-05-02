import { initAddProject } from './components/views/initAddProject';
import { initSidebar } from './components/views/initSidebar';  
import { initTodoContent } from './components/views/todoContentDom';
import getSelectedItem from './components/views/getSelectedItem';
import './style.css'
import projectsArray from './components/views/projectsArray';
import { ToDo } from './components/logic/todoObject';

let arrayProjects = projectsArray();

arrayProjects[0].addTodo(new ToDo("Python", "Fazer o curso da Alura", "24-08-2024"));

initSidebar();  
initAddProject();

initTodoContent(arrayProjects);