function findToDoIndex(array, searchName) {
    return array.findIndex(element => element.title === searchName);
}

function updateToDoTitle(array, index, newTitle) {
    array[index].title = newTitle;
}

function updateToDoDescription(array, index, newDescription) {
    array[index].description = newDescription;
}

function updateToDoDueDate(array, index, newDueDate) {
    array[index].dueDate = newDueDate;
}

function updateToDoPriority(array, index, newPriority) {
    array[index].priority = newPriority;
}

function updateToDo(array, searchName, newTitle, newDescription, newDueDate, newPriority) {
    const index = findToDoIndex(array, searchName);
    if (index !== -1) {
        if (newTitle !== undefined) {
            updateToDoTitle(array, index, newTitle);
        }
        if (newDescription !== undefined) {
            updateToDoDescription(array, index, newDescription);
        }
        if (newDueDate !== undefined) {
            updateToDoDueDate(array, index, newDueDate);
        }
        if (newPriority !== undefined) {
            updateToDoPriority(array, index, newPriority);
        }
        console.log("To-Do updated successfully.");
    } else {
        console.log("To-Do not found.");
    }
}

export default updateToDo