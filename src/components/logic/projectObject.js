export default function Project(nome) {
    this.nome = nome;
    this.todos = [];

    this.addTodo = function(todo) {
        this.todos.push(todo);
    };

    this.removeTodo = function(todoTitle) {
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    };
}