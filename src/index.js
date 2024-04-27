import { ToDo } from './components/logic/todo';
import updateToDo from './components/logic/update'
import './style.css'

const projects = [
    new ToDo("Estudar Inglês", "Praticar no curso de inglês", "2024-06-23", "high"),
    new ToDo("Exercício Físico", "Ir para a academia", "2024-05-23", "medium"),
    new ToDo("Programar", "Fazer o curso da alura", "2024-08-23", "low"),
];

console.log("antes");
console.log(JSON.parse(JSON.stringify(projects))); 

updateToDo(projects, "Programar", "fds", "fdsa", "fdsa", "fsda");

console.log("depois");
console.log(projects);