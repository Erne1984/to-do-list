const projects = [
    {title: "Estudar Inglês", description: "Praticar no curso de inglês", dueDate: "2024-06-23", priority: "high"},
    {title: "Exercício Físico", description: "Ir para a academia", dueDate: "2024-05-23", priority: "medium"},
    {title: "Programar", description: "Fazer o curso da alura", dueDate: "2024-08-23", priority: "low"}]

// const objectTeste = {title: "Estudar Inglês", description: "João", dueDate: "João", priority: "João"}

function addToDo(ToDo){
    let result = true
    projects.forEach((element) =>{
        if(element.title == ToDo.title){ result = false}
    } )

    if(result){
        projects.push(ToDo)
        console.log("Sucess")
    }else{
        console.log("Título já existente")
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

/*function updateToDo(searchName, title, description, dueDate, priority){
    projects.find((project) => {
        return project.name
    })
}*/

function ToDo(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}