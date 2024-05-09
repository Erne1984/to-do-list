import { projectsArray } from '../../index';
import getSelectedItem from './getSelectedItem';
import { updateToDo } from '../logic/update';
import { deleteToDo } from '../logic/app';

export function editDeleteTodo() {
    const todoCardDom = document.querySelector('.list-todo');

    // Função para evento de edição
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

            console.log("Teste1")

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

                btnEdit.addEventListener("click", () => {
                    console.log("Teste2")
                    if (editedTitle.value == "" ||
                        editedDescription.value == "" ||
                        editedDate.value == "") {
                        alert("Preencha todos os campos!")
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

                        modal.close()
                    }
                })

                cancelEdit.addEventListener("click", () => {
                    modal.close();
                })
            } else {
                console.log("Projeto não encontrado!");
            }
        }
    }

    // Função para evento de exclusão
    function handleDelete(event) {
        const target = event.target;

        if (target.classList.contains('delete')) {
            const todoCard = target.closest('.todo-card');
            let todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);
            const selectedProjectName = getSelectedItem();
            let selectedProject = projectsArray.find(project => project.nome === selectedProjectName);
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
                projectsArray[selectedProjectIndex].todos.splice(todoIndex, 1);
                todoCard.remove();
            } else {
                console.log("Projeto não encontrado!");
            }

        }
    }

    // Remover os event listeners anteriores
    // Adicionar event listener usando event delegation
    todoCardDom.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('edit')) {
            handleEdit(event);
        } else if (target.classList.contains('delete')) {
            handleDelete(event);
        }
    });
}