import { projectsArray } from '../../index';
import getSelectedItem from './getSelectedItem';
import saveProjectsArrayToLocalStorage from './saveToLocalStorage';

export function editTodo() {
    const todoCardDom = document.querySelector('.list-todo');
    let editEventListenerActive = false;

    function handleEdit(event) {
        const target = event.target;

        if (target.classList.contains('edit')) {
            const todoCard = target.closest('.todo-card');
            let todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);
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
                todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);
            }

            if (selectedProjectIndex !== -1) {
                const selectedProject = projectsArray[selectedProjectIndex];
                const todo = selectedProject.todos[todoIndex];

                const modal = document.querySelector("dialog");
                const editedTitle = modal.querySelector('#title');
                const editedDescription = modal.querySelector('#description-edit');
                const editedDate = modal.querySelector('#date-edit');
                const editedImportant = modal.querySelector('#important');

                editedTitle.value = projectsArray[selectedProjectIndex].todos[todoIndex].title;
                editedDescription.value = projectsArray[selectedProjectIndex].todos[todoIndex].description;
                editedDate.value = projectsArray[selectedProjectIndex].todos[todoIndex].dueDate;
                editedImportant.value = projectsArray[selectedProjectIndex].todos[todoIndex].priority;

                modal.showModal();

                const btnEdit = document.querySelector("#submit-edit");
                const cancelEdit = document.querySelector("#cancel-edit");

                if (!editEventListenerActive) {
                    btnEdit.addEventListener("click", () => {
                        handleEditButtonClick(todoCard, selectedProjectIndex, todoIndex, modal, editedTitle, editedDescription, editedDate, editedImportant);
                    });

                    cancelEdit.addEventListener("click", () => {
                        modal.close();
                    });

                    editEventListenerActive = true;
                }

            } else {
                console.log("Projeto não encontrado!");
            }
        }
    }

    todoCardDom.addEventListener('click', (event) => {
        handleEdit(event);
    });
}

function handleEditButtonClick(todoCard, selectedProjectIndex, todoIndex, modal, editedTitle, editedDescription, editedDate, editedImportant) {
    if (editedTitle.value == "" ||
        editedDescription.value == "" ||
        editedDate.value == "") {
        alert("Preencha todos os campos!");
    } else {
        projectsArray[selectedProjectIndex].todos[todoIndex].title = editedTitle.value;
        projectsArray[selectedProjectIndex].todos[todoIndex].description = editedDescription.value;
        projectsArray[selectedProjectIndex].todos[todoIndex].dueDate = editedDate.value;
        projectsArray[selectedProjectIndex].todos[todoIndex].priority = editedImportant.value;

        const todoCardTitle = todoCard.querySelector(".todo-title");
        const todoCardDescription = todoCard.querySelector(".todo-description");
        const todoCardDate = todoCard.querySelector(".date");

        todoCardTitle.textContent = editedTitle.value;
        todoCardDescription.textContent = editedDescription.value;
        todoCardDate.textContent = editedDate.value;

        modal.close();
        saveProjectsArrayToLocalStorage();
    }
}
