import createTodoCard from './createTodoCard';
import { ToDo } from '../logic/todoObject';
import getSelectedItem from './getSelectedItem';
import { projectsArray } from '../../index';
import { editDeleteTodo } from './editDeleteTodo';

function displayNoTasksMessage() {
    let noTaskMsg = document.querySelector('.no-task');
    if (!noTaskMsg) {
        noTaskMsg = document.createElement("div");
        noTaskMsg.textContent = "Sem tarefas a fazer";
        noTaskMsg.classList.add("no-task");
        const todoCardDom = document.querySelector('.list-todo');
        todoCardDom.appendChild(noTaskMsg);
    }
}

export function initTodoContent() {
    const todoCardDom = document.querySelector('.list-todo');
    todoCardDom.innerHTML = '';

    const selectedProjectName = getSelectedItem();

    if (projectsArray.every(project => project.todos.length === 0)) {
        const fazerProg = new ToDo("Programação", "estudos", "09/05/2024");
        const fazerLingues = new ToDo("Alemão", "Estudar no youtube", "16/05/2024");
        const fazerAcademia = new ToDo("Malhar os Glúteos", "Gaviões", "21/04/2024");

        projectsArray[0].todos.push(fazerLingues);
        projectsArray[1].todos.push(fazerAcademia);
        projectsArray[2].todos.push(fazerProg);
    }

    if(selectedProjectName === "Geral"){
        projectsArray.forEach(project => {
            project.todos.forEach(todo => {
                const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                todoCardDom.innerHTML += todoCardHTML;
            });
        });
        if (todoCardDom.innerHTML === '') {
            displayNoTasksMessage();
        }
    }

    if(selectedProjectName === "Hoje"){
        const today = new Date().toLocaleDateString();
        projectsArray.forEach(project => {
            project.todos.forEach(todo => {
                if (todo.dueDate === today) {
                    const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                    todoCardDom.innerHTML += todoCardHTML;
                }
            });
        });
        if (todoCardDom.innerHTML === '') {
            displayNoTasksMessage();
        }
    }

    if(selectedProjectName === "Próxima Semana"){
        const today = new Date();
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        projectsArray.forEach(project => {
            project.todos.forEach(todo => {
                const todoDate = new Date(todo.dueDate);
                if (todoDate > today && todoDate <= nextWeek) {
                    const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                    todoCardDom.innerHTML += todoCardHTML;
                }
            });
        });
        if (todoCardDom.innerHTML === '') {
            displayNoTasksMessage();
        }
    }
    
    if(selectedProjectName === "Importante"){
        projectsArray.forEach(project => {
            project.todos.forEach(todo => {
                if (todo.priority) {
                    const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                    todoCardDom.innerHTML += todoCardHTML;
                }
            });
        });
        if (todoCardDom.innerHTML === '') {
            displayNoTasksMessage();
        }
    }

    if (selectedProjectName && selectedProjectName !== "Geral" && selectedProjectName !== "Hoje" && selectedProjectName !== "Próxima Semana" && selectedProjectName !== "Importante") {
        const selectedProject = projectsArray.find(project => project.nome === selectedProjectName);
        if (selectedProject && selectedProject.todos.length > 0) {
            selectedProject.todos.forEach(todo => {
                const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                todoCardDom.innerHTML += todoCardHTML;
            });
        } else {
            displayNoTasksMessage();
        }
    }

    editDeleteTodo();
}