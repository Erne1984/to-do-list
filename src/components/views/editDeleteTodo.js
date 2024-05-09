import { projectsArray } from '../../index';
import createTodoCard from "./createTodoCard";
import getSelectedItem from './getSelectedItem';
import { initTodoContent } from './todoContentDom';
import { updateToDo } from '../logic/update';
import { deleteToDo } from '../logic/app'

export function editDeleteTodo() {
    const todoCardDom = document.querySelector('.list-todo');

    // Função para manipular o evento de edição
    function handleEdit(event) {
        const target = event.target;

        if (target.classList.contains('edit')) {

            const todoCard = target.closest('.todo-card');
            const todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);
            const selectedProjectName = getSelectedItem();
            const selectedProjectIndex = projectsArray.findIndex(project => project.nome === selectedProjectName);

            if (selectedProjectIndex !== -1) { 
                const selectedProject = projectsArray[selectedProjectIndex];
                const todo = selectedProject.todos[todoIndex];

                const modal = document.querySelector("dialog");
                const editedTitle = modal.querySelector('#title');
                const editedDescription = modal.querySelector('#description-edit');
                const editedDate = modal.querySelector('#date-edit');
                const editedImportant = modal.querySelector('#important');

                console.log(projectsArray[selectedProjectIndex].todos[todoIndex]);

                editedTitle.value = projectsArray[selectedProjectIndex].todos[todoIndex].title;
                editedDescription.value = projectsArray[selectedProjectIndex].todos[todoIndex].description;
                editedDate.value = projectsArray[selectedProjectIndex].todos[todoIndex].dueDate;
                editedImportant.value = projectsArray[selectedProjectIndex].todos[todoIndex].priority;

                modal.showModal();

                const btnEdit = document.querySelector("#submit-edit");
                const cancelEdit = document.querySelector("#cancel-edit");

                btnEdit.addEventListener("click", () => {
                    if (editedTitle.value == "" ||
                        editedDescription.value == "" ||
                        editedDate.value == "") {

                        alert("Preencha todos os campos!")
                    }else{
                        projectsArray[selectedProjectIndex].todos[todoIndex].title = editedTitle.value;
                        projectsArray[selectedProjectIndex].todos[todoIndex].description = editedDescription.value;
                        projectsArray[selectedProjectIndex].todos[todoIndex].dueDate = editedDate.value;
                        projectsArray[selectedProjectIndex].todos[todoIndex].priority = editedImportant.value;

                        const todoCard = target.closest('.todo-card');
                        const todoCardTitle = todoCard.querySelector(".todo-title");
                        const todoCardDescription = todoCard.querySelector(".todo-description");
                        const todoCardDate = todoCard.querySelector(".date");
                        //const todoCardPriority = todoCard.querySelector(".checkbox-round");

                        todoCardTitle.textContent = editedTitle.value;
                        todoCardDescription.textContent = editedDescription.value;
                        todoCardDate.textContent = editedDate.value;

                        modal.close()
                    }
                })

                cancelEdit.addEventListener("click", () => {
                    modal.close();
                })

                console.log('Editar todo:', todo);
            } else {
                console.log("Projeto não encontrado!");
            }
        }
    }

    // Função para manipular o evento de exclusão
    function handleDelete(event) {
        const target = event.target;

        if (target.classList.contains('delete')) {

            const todoCard = target.closest('.todo-card');

            const todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);

            const selectedProjectName = getSelectedItem();
            const selectedProject = projectsArray.find(project => project.nome === selectedProjectName);

            const todo = selectedProject.todos[todoIndex];

            selectedProject.todos.splice(todoIndex, 1);

            todoCard.remove();

            console.log('Excluir todo:', todo);
        }
    }

    todoCardDom.removeEventListener('click', handleEdit);
    todoCardDom.removeEventListener('click', handleDelete);

    todoCardDom.addEventListener('click', handleEdit);
    todoCardDom.addEventListener('click', handleDelete);
}