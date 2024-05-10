import createTodoCard from './createTodoCard';
import getSelectedItem from './getSelectedItem';
import { projectsArray } from '../../index';

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


    if (selectedProjectName === "Geral") {
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

    if (selectedProjectName === "Hoje") {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        projectsArray.forEach(project => {
            project.todos.forEach(todo => {
                if (todo.dueDate === formattedDate) {
                    const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                    todoCardDom.innerHTML += todoCardHTML;
                }
            });
        });
        if (todoCardDom.innerHTML === '') {
            displayNoTasksMessage();
        }
    }

    if (selectedProjectName === "Próxima Semana") {
        const today = new Date();
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        projectsArray.forEach(project => {
            project.todos.forEach(todo => {
                const todoDate = new Date(todo.dueDate);
                const oneDay = 24 * 60 * 60 * 1000; // Quantidade de milissegundos em um dia
                const daysUntilDue = Math.round((todoDate - today) / oneDay); // Calcula os dias até a data do todo
                if (daysUntilDue > 0 && daysUntilDue <= 7) { // Verifica se a data do todo está dentro dos próximos sete dias
                    const todoCardHTML = createTodoCard(todo.title, todo.description, todo.dueDate);
                    todoCardDom.innerHTML += todoCardHTML;
                }
            });
        });

        if (todoCardDom.innerHTML === '') {
            displayNoTasksMessage();
        }
    }

    if (selectedProjectName === "Importante") {
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


}