import { projectsArray } from '../../index';
import getSelectedItem from './getSelectedItem';
import saveProjectsArrayToLocalStorage from './saveToLocalStorage';

export function deleteTodo() {
    const todoCardDom = document.querySelector('.list-todo');

    function handleDelete(event) {
        const target = event.target;

        if (target.classList.contains('delete')) {
            const todoCard = target.closest('.todo-card');
            const todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);
            const selectedProjectName = getSelectedItem();
            let selectedProjectIndex = "";

            if (selectedProjectName == "Geral" ||
                selectedProjectName == "Hoje" ||
                selectedProjectName == "Próxima Semana" ||
                selectedProjectName == "Importante") {
                const todoName = todoCard.querySelector('.todo-title');
                let projectName = "";

                projectsArray.forEach((project) => {
                    project.todos.forEach((todo, index) => {
                        if (todo.title === todoName.textContent) {
                            todoIndex = index;
                            projectName = project.nome;
                        }
                    });
                });
                selectedProjectIndex = projectsArray.findIndex(project => project.nome === projectName);
            } else {
                selectedProjectIndex = projectsArray.findIndex(project => project.nome === selectedProjectName);
            }

            if (selectedProjectIndex !== -1) {
                projectsArray[selectedProjectIndex].todos.splice(todoIndex, 1);
                todoCard.remove();
                saveProjectsArrayToLocalStorage();
            } else {
                console.log("Projeto não encontrado!");
            }
        }
    }

    todoCardDom.addEventListener('click', (event) => {
        handleDelete(event);
    });
}