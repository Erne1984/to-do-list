import createTodoCard from './createTodoCard';
import { ToDo } from '../logic/todoObject';
import getSelectedItem from './getSelectedItem';
import Project from '../logic/projectObject';

export function initTodoContent(array) {
    const todoCardDom = document.querySelector('.todo-card');
    const noTaskMsg = document.querySelector('.no-task');

    array.forEach(project => {
        if(project == getSelectedItem()){
            console.log("teste")
        }
    });

    if (!todoCardDom == null) {
        noTaskMsg.classList.add('none');
    } else {
        noTaskMsg.classList.remove('none');
    }
}
