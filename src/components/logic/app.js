function addToDo(newToDo, array) {
    const titleExists = array.some(element => element.title === newToDo.title);

    if (titleExists) {
        console.log("Título já existente");
    } else {
        array.push(newToDo);
        console.log("Sucesso");
    }
}

function readToDo(searchName, array) {
    const foundElement = array.find(element => element.title === searchName);

    if (foundElement) {
        console.log(foundElement);
    } else {
        console.log("Elemento não encontrado");
    }
}

function deleteToDo(searchName, array) {
    const foundElement = array.find(element => element.title === searchName);
    const indexElement = array.indexOf(foundElement);

    array.splice(indexElement, 1);
}

export {addToDo, readToDo, deleteToDo}