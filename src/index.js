import { initAddProject } from './components/views/initAddProject';
import { initSidebar } from './components/views/initSidebar';  
import { initTodoContent } from './components/views/todoContentDom';
import getSelectedItem from './components/views/getSelectedItem';
import './style.css'

initSidebar();  
initAddProject();

initTodoContent();

const selectedItem = getSelectedItem()
console.log(selectedItem)