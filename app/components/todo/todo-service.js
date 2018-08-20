import Todo from '../models/Todo.js'
//do i have to push stuff into the array w/ in the api?
// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/mary/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {
	constructor() {

	}

	getTodos(draw) {
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				let todo = new Todo(res.data.data)
				draw(todo)
			})
			.catch(logError)
	}

	addTodo(todo, draw) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				let todo = new Todo(res.data.data)
				draw(todo)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos(todo)
			})
			//DO YOU WANT TO DO ANYTHING WITH THIS?
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		todoApi.delete(todoId, draw)
			.then(res => {
				this.getTodos(draw)
			})
		// Umm this one is on you to write.... The method is a DELETE
	}

}

//put and delete need id url parameter i think