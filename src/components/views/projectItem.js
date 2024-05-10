import { initTodoContent } from "./todoContentDom";
import { formAddTodo } from "./formAddTodo";

function projectItem(name) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('box-list-item');
    projectElement.classList.add('box-list-item-boxIcons');
    projectElement.classList.add('project');
    
    const listItem = document.createElement('li');
    listItem.classList.add('list-element');
    listItem.textContent = name;
    projectElement.appendChild(listItem);

    const iconsBox = document.createElement('div');
    projectElement.appendChild(iconsBox);
    
    // Ícone de edição
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit', 'edit-icon-project');
    iconsBox.appendChild(editIcon);
    
    // Ícone de exclusão
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon-project');
    iconsBox.appendChild(deleteIcon);

    projectElement.addEventListener('click', () => {
        const listItemsLeft = document.querySelectorAll('.box-list-item');

        if (!projectElement.classList.contains('select')) {
            listItemsLeft.forEach((item) => item.classList.remove('select'));
            projectElement.classList.add('select');
            const titleTodo = document.querySelector('.title-content');
            titleTodo.textContent = name;
            initTodoContent();
            formAddTodo();
        }
    });

    return projectElement;
}

export default projectItem;
