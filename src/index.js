import { initAddProject } from './components/views/initAddProject';
import { initSidebar } from './components/views/initSidebar';  
import { initTodoContent } from './components/views/todoContentDom';
import { editDeleteTodo } from './components/views/editDeleteTodo';
import './style.css'
import Project from './components/logic/projectObject';

const projectsArray = [];

// Antes de usar projectsArray, verifique se ele está disponível no localStorage
if (localStorage.getItem('projectsArray')) {
    // Se existir, recupere a string JSON do localStorage
    const projectsArrayString = localStorage.getItem('projectsArray');

    // Converta a string JSON de volta para um array
    const savedProjectsArray = JSON.parse(projectsArrayString);

    // Atualize projectsArray com os dados recuperados do localStorage
    projectsArray.splice(0, projectsArray.length, ...savedProjectsArray);
}

export { projectsArray };


initSidebar();

initAddProject();

initTodoContent();
editDeleteTodo();