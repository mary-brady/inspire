import Todo from '../models/Todo.js'
//do i have to push stuff into the array w/ in the api?
// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT???? check completed or nah
				console.log(res)
				let todos = res.data.map(rawTD => {
					return new Todo(rawTD)
				})
				draw(todos)
			})
			.catch(logError)
	}

	//data.data is referencing an array

	addTodo(todo, draw) {
		// WHAT IS THIS FOR??? send object that has desc to server
		todoApi.post('', todo)
			.then(function (res) {
				// <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				this.getTodos(draw)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH. toggle status = done or not? update aka api.put
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		//this may need ('/todo/id' + id, new data)
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		todoApi.delete('/id/', todoId)
			.then(res => {
				this.getTodos(draw)
			})
		// Umm this one is on you to write.... The method is a DELETE

	}

}

//put and delete need id url parameter i think