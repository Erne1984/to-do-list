import createTodoCard from './createTodoCard';
import { ToDo } from '../logic/todoObject';
import getSelectedItem from './getSelectedItem';
import projectsArray from './projectsArray'; 
import { editDeleteTodo } from './editDeleteTodo';

export function initTodoContent() {
    const todoCardDom = document.querySelector('.list-todo');
    let noTaskMsg = document.querySelector('.no-task');
    const selectedProjectName = getSelectedItem(); 

    const fazerProg = new ToDo("Programação", "estudos", "21/07/2004");
    const fazerLingues = new ToDo("Alemão", "Estudar no youtube", "21/07/2034");
    const fazerAcademia = new ToDo("Malhar os Glúteos", "Gaviões", "21/04/2024");

    const projects = projectsArray();

    projects[0].todos.push(fazerLingues);
    projects[1].todos.push(fazerAcademia);
    projects[2].todos.push(fazerProg);

    const selectedProject = projects.find(project => project.nome === selectedProjectName);

    todoCardDom.innerHTML = '';  

    if (selectedProject && selectedProject.todos.length > 0) {
        selectedProject.todos.forEach(todo => {
            const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
            editDeleteTodo()
            todoCardDom.innerHTML += todoCardHTML;
        });
        if (noTaskMsg) {
            noTaskMsg = null; 
        }
    } else {
        if (!noTaskMsg) {
            noTaskMsg = document.createElement("div");
            noTaskMsg.textContent = "Sem tarefas a fazer";
            noTaskMsg.classList.add("no-task");
        }
        todoCardDom.appendChild(noTaskMsg);
    }
}