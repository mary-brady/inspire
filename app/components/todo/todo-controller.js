import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(drawTodos)
}

function drawTodos(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
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
		<button onclick="app.controllers.todoController.removeTodo('${todos.data[key]._id}')">Delete</button>
		</ul>
		`
		}
	}
	document.getElementById('todo-list').innerHTML = template
}
//DONT FORGET TO LOOP


export default class TodoController {
	constructor() {
		this.getTodo()
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		// todoService.addTodo(todo, drawTodos)
		var form = e.target
		var todo = {
			description: form.todo.value,
			completed: false,
			_id: '',
			user: "mary"
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, drawTodos)
		form.reset()


		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, drawTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, drawTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
	getTodo() {
		todoService.getTodos(function (todos) {
			drawTodos(todos)

		})
	}


}
