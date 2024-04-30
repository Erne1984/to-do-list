import createTodoCard from './todoCard';

export function initTodoContent() {
    const todoListContent = document.querySelector("#list-todo-content");
    const todoCardDom = document.querySelector('.todo-card');
    const noTaskMsg = document.querySelector('.no-task');

    //const todoCard1 = createTodoCard("Estudar Algo", "Fazer o curso de alura", "23/11/2024");
    //todoListContent.innerHTML += todoCard1;

    if (todoCardDom == null) {
        noTaskMsg.classList.toggle('none');
    }
}