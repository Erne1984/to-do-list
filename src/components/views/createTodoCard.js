function createTodoCard(title, description, date) {
    return `
    <div class="todo-card">
        <!--input type="checkbox" class="checkbox-round"-->
    
        <div class="todo-details">
            <div class="todo-title">${title}</div>
            <small class="todo-description">${description}</small>
        </div>
        <div class="date">${date}</div>
        <div class="edit-delete-box">
            <div class="edit"> </div>
            <div class="delete"> </div>
        </div>
    </div>
    `
}

export default createTodoCard;
