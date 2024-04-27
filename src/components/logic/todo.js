const projects = [
    new ToDo("Estudar Inglês", "Praticar no curso de inglês", "2024-06-23", "high"),
    new ToDo("Exercício Físico", "Ir para a academia", "2024-05-23", "medium"),
    new ToDo("Programar", "Fazer o curso da alura", "2024-08-23", "low"),
];

function ToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function addToDo(newToDo) {
    const titleExists = projects.some(element => element.title === newToDo.title);

    if (titleExists) {
        console.log("Título já existente");
    } else {
        projects.push(newToDo);
        console.log("Sucesso");
    }
}

function readToDo(searchName) {
    const foundElement = projects.find(element => element.title === searchName);

    if (foundElement) {
        console.log(foundElement);
    } else {
        console.log("Elemento não encontrado");
    }
}

function deleteToDo(searchName) {
    const foundElement = projects.find(element => element.title === searchName);
    const indexElement = projects.indexOf(foundElement);

    projects.splice(indexElement, 1);
}

function findToDoIndex(searchName) {
    return projects.findIndex(element => element.title === searchName);
}

function updateToDoTitle(index, newTitle) {
    projects[index].title = newTitle;
}

function updateToDoDescription(index, newDescription) {
    projects[index].description = newDescription;
}

function updateToDoDueDate(index, newDueDate) {
    projects[index].dueDate = newDueDate;
}

function updateToDoPriority(index, newPriority) {
    projects[index].priority = newPriority;
}

function updateToDo(searchName, newTitle, newDescription, newDueDate, newPriority) {
    const index = findToDoIndex(searchName);
    if (index !== -1) {
        if (newTitle !== undefined) {
            updateToDoTitle(index, newTitle);
        }
        if (newDescription !== undefined) {
            updateToDoDescription(index, newDescription);
        }
        if (newDueDate !== undefined) {
            updateToDoDueDate(index, newDueDate);
        }
        if (newPriority !== undefined) {
            updateToDoPriority(index, newPriority);
        }
        console.log("To-Do updated successfully.");
    } else {
        console.log("To-Do not found.");
    }
}

export {addToDo, readToDo, updateToDo, deleteToDo}