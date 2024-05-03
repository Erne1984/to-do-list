import { initAddProject } from './components/views/initAddProject';
import { initSidebar } from './components/views/initSidebar';  
import { initTodoContent } from './components/views/todoContentDom';
import './style.css'
import projectsArray from './components/views/projectsArray';
import { ToDo } from './components/logic/todoObject';

let arrayProjects = projectsArray()

initSidebar();

initAddProject();

initTodoContent();