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

	getTodos(drawTodos) {
		todoApi.get('')
			.then((res) => {
				drawTodos(res.data)
				todoList = []
				res.data.data.forEach(function (element) {
					todoList.push(element)
				})
			})
			.catch(logError)
	}

	addTodo(todo, drawTodos) {
		let newTodo = new Todo({
			description: todo.description,
			user: todo.user,
			completed: false
		})
		todoApi.post('', newTodo)
			.then(res => {
				this.getTodos(drawTodos)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, draw) {
		var todo = {}
		for (let i = 0; i < todoList.length; i++) {
			if (todoList[i]._id == todoId.toString()) {
				todo = todoList[i]
			}
		}
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		todoApi.delete(todoId, draw)
			.then(res => {
				this.getTodos(draw)
			})
	}

}
