import { initAddProject } from './components/views/initAddProject';
import { initSidebar } from './components/views/initSidebar';  
import { initTodoContent } from './components/views/todoContentDom';
import { editTodo } from './components/views/editTodo';
import { deleteTodo } from './components/views/deleteTodo';
import { deleteProject } from './components/views/deleteProject';
import { editProject } from './components/views/editProject';
import './style.css';

const projectsArray = [];

if (localStorage.getItem('projectsArray')) {
    const projectsArrayString = localStorage.getItem('projectsArray');

    const savedProjectsArray = JSON.parse(projectsArrayString);

    projectsArray.splice(0, projectsArray.length, ...savedProjectsArray);
}

export { projectsArray };


initSidebar();

initAddProject();

initTodoContent();

editTodo();
deleteTodo();

deleteProject();
editProject();