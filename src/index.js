import { initAddProject } from './components/views/initAddProject';
import { initSidebar } from './components/views/initSidebar';  
import { initTodoContent } from './components/views/todoContentDom';
import './style.css'
import Project from './components/logic/projectObject';

const projectsArray = [
    new Project("Linguagens"),
    new Project("Academia"),
    new Project("Programação"),
];

export { projectsArray };


initSidebar();

initAddProject();

initTodoContent();