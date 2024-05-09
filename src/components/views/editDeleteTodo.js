import { projectsArray } from '../../index';
import createTodoCard from "./createTodoCard";
import getSelectedItem from './getSelectedItem';
import { initTodoContent } from './todoContentDom';
import { updateToDo } from '../logic/update';
import { deleteToDo } from '../logic/app'

export function editDeleteTodo() {
    const todoCardDom = document.querySelector('.list-todo');

    todoCardDom.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('edit')) {

            // Lógica para editar

            const todoCard = target.closest('.todo-card');
            const modal = document.querySelector("dialog");
            const todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);
            const selectedProjectName = getSelectedItem();
            const selectedProject = projectsArray.find(project => project.nome === selectedProjectName);
            const todo = selectedProject.todos[todoIndex];
            
            // Implementar a lógica de edição aqui, talvez exibindo um formulário de edição com os detalhes atuais do todo preenchidos
            // Você pode usar as funções de atualização existentes ou implementar uma nova função para atualizar o todo

            console.log(modal)
            modal.showModal();

            console.log('Editar todo:', todo);
        } else if (target.classList.contains('delete')) {

            // Lógica para deletar 

            const todoCard = target.closest('.todo-card');

            const todoIndex = Array.from(todoCardDom.children).indexOf(todoCard);

            const selectedProjectName = getSelectedItem();
            const selectedProject = projectsArray.find(project => project.nome === selectedProjectName);

            const todo = selectedProject.todos[todoIndex];

            selectedProject.todos.splice(todoIndex, 1);

            todoCard.remove();

            console.log('Excluir todo:', todo);
        }
    });
}