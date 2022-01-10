

export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description
  }


  get Template() {
    return `
        <div class="form-check py-1">
        <input onclick="app.todoController.check('${this.id}')" class="form-check-input" ${this.completed ? 'checked' : ''}
          type="checkbox" value="false" id="flexCheckDefault">
        <div class="row">
          <div class="col-6">
            <label class="form-check-label " for="flexCheckDefault">${this.completed ? '<del>' : ''} ${this.description}
                ${this.completed ? '</del>' : ''}</label>
          </div>
          <div class="col-2 my-1">
            <button class=" btn btn-sm btn-danger" onclick="app.todoController.removeTodo('${this.id}')">DELETE</button>
          </div>
        </div>
      </div>
    `
  }
}