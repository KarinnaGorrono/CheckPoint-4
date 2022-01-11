import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import { Todo } from "../Models/Todo.js";

class TodoService {
    async getTodos() {
        ProxyState.checked = 0
        ProxyState.count = 0
        const res = await sandboxApi.get('Karinna/todos')
        const todos = res.data.map(t => new Todo(t))
        todos.forEach(t => ProxyState.count++)
        ProxyState.todo = todos
        this.todo()

    }

    async createTodo(newtodo) {
        const res = await sandboxApi.post('Karinna/todos', newtodo)
        const todo = new Todo(res.data)
        ProxyState.todo = [...ProxyState.todo, todo]
        ProxyState.count++
    }

    async removeTodo(id) {
        if (window.confirm('Are you sure you want to delete this Todo?')) {
            await sandboxApi.delete('Karinna/todos/' + id)
            ProxyState.todo = ProxyState.todo.filter(t => t.id != id)
            ProxyState.count--
            this.getTodos()

        }
    }

    async check(id) {
        const todo = ProxyState.todo.find(t => t.id == id)
        todo.completed = !todo.completed
        const res = await sandboxApi.put('Karinna/todos/' + id, todo)
        ProxyState.todo = ProxyState.todo
        console.log(ProxyState.todo)
        if (todo.completed == true) {
            ProxyState.checked++
        } else if (todo.completed == false) {
            ProxyState.checked--
        }
    }
    todo() {
        let t = ProxyState.todo
        t.forEach(t => t.completed ? ProxyState.checked++ : '')
    }
}

export const todoService = new TodoService()