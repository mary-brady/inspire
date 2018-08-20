import TodoService from "./todo-service.js";

var todoService = new TodoService

function getTodos() {
	todoService.getTodos(drawTodos)
}

function drawTodos(todos) {
	let template = ''
	for (var key in todos.data) {
		const todo = key;
		if (todos.data[key].completed) {
			template += `
				<ul>
				<li><input onclick="app.controllers.todoController.toggleTodoStatus('${todos.data[key]._id}')" type="checkbox" name="completed" value="completed" checked> ${todos.data[key].description}</li>
				<button onclick="app.controllers.todoController.removeTodo('${todos.data[key]._id}')">Delete</button>
				</ul>
				`
		}
		else {
			template += `
				<ul>
				<li><input onclick="app.controllers.todoController.toggleTodoStatus('${todos.data[key]._id}')" type="checkbox" name="completed" value="completed"> ${todos.data[key].description}</li>
				<button onclick="app.controllers.todoController.removeTodo('${todos.data[key]._id}')">Delete!</button>
				</ul>
				`
		}
	}
	document.getElementById('todo-list').innerHTML = template
}

export default class TodoController {
	constructor() {
		this.getTodo()
	}

	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.todo.value,
			completed: false,
			_id: '',
			user: "mary"
		}
		todoService.addTodo(todo, drawTodos)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		todoService.toggleTodoStatus(todoId, drawTodos)
	}

	removeTodo(todoId) {
		todoService.removeTodo(todoId, drawTodos)
	}
	getTodo() {
		todoService.getTodos(function (todos) {
			drawTodos(todos)

		})
	}


}
