import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";

function _draw() {
    const todo = ProxyState.todo
    let template = ''
    todo.forEach(t => template += t.Template)
    document.getElementById('checktodo').innerHTML = template
    document.getElementById('complete').innerText = ` (${ProxyState.checked} / ${ProxyState.count}) Completed`
}

export class TodoController {
    constructor() {
        ProxyState.on('todo', _draw)
        ProxyState.on('count', _draw)
        ProxyState.on('checked', _draw)
        this.getTodos()
    }

    createTodo() {
        window.event.preventDefault()
        const formElem = window.event.target
        const newTodo = {
            // @ts-ignore
            description: formElem.description.value
        }
        todoService.createTodo(newTodo)
        // @ts-ignore
        formElem.reset()
    }

    async getTodos() {
        try {
            await todoService.getTodos()
        } catch (error) {
            console.error('Error from Todos Controller', error)
        }
    }

    async addTodo(id) {
        try {
            // @ts-ignore
            await todoService.addTodo(id)
        } catch (error) {
            console.error(error);
        }
    }

    async removeTodo(id) {
        try {
            await todoService.removeTodo(id)
        } catch (error) {
            console.error("error", error)
        }
    }

    async check(id) {
        try {
            await todoService.check(id)
        } catch (error) {
            console.error(error)
        }
    }
}