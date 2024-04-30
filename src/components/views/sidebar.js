export function initSidebar() {
    const listItemsLeft = document.querySelectorAll(".box-list-item");
    const titleTodo = document.querySelector(".title-content");

    listItemsLeft.forEach((listItem) => {
        const sideBarItens = {
            "Geral": "Todas as Tarefas",
            "Hoje": "Hoje",
            "Próxima Semana": "Próxima Semana",
            "Importante": "Importante",
        };
        let currentItem = "";
        listItem.addEventListener("click", () => {
            if (!listItem.classList.contains('select')) {
                listItemsLeft.forEach((item) => item.classList.remove("select"));
                listItem.classList.add("select");
                currentItem = listItem.querySelector(".list-element");
                titleTodo.textContent = sideBarItens[currentItem.textContent];
            }
        })
    });
}
