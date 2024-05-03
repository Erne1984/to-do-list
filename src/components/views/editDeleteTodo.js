export function editDeleteTodo() {
    const todoCardDom = document.querySelector('.list-todo');

    todoCardDom.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('edit')) {
            console.log('Botão de edição clicado');
        }

        if (target.classList.contains('delete')) {
            console.log('Botão de exclusão clicado');
            console.log(target.textContent)
        }
    });
}
