import { initTodoContent } from "./todoContentDom";
import manageProjects from "./manageProjects";

function projectItem(name) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('box-list-item');
    projectElement.classList.add('project');
    const listItem = document.createElement('li');
    listItem.classList.add('list-element');
    listItem.textContent = name;
    projectElement.appendChild(listItem);

    projectElement.addEventListener('click', () => {
        const listItemsLeft = document.querySelectorAll('.box-list-item');

        if (!projectElement.classList.contains('select')) {
            listItemsLeft.forEach((item) => item.classList.remove('select'));
            projectElement.classList.add('select');
            const titleTodo = document.querySelector('.title-content');
            titleTodo.textContent = name;
            manageProjects()
        }
    });

    return projectElement;
}

export default projectItem;
