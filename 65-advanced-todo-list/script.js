// add todo
const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const list = document.querySelector('#list')
const template = document.querySelector('#list-item-template')
const LOCAL_STORAGE_PREFIX = 'ADVANCED-TODO-LIST'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const allTodos = loadTodos()
allTodos.forEach(renderTodo)

list.addEventListener('change', e => {
  if (!e.target.matches(['data-list-item-checkbox'])) return

  // grab the todo that is clicked on
  const parent = e.target.closest('.list-item')
  const todoId = parent.dataset.todoId
  const todo = allTodos.find(t => t.id === todoId)

  todo.completed = e.target.checked
  // set the completed property equal to checkbox value
  // save the updated value
  saveTodos()
})

form.addEventListener('submit', e => {
  e.preventDefault()

  // this will ensure that we don't create empty todo
  if (todoInput.value === '') return

  const todoName = todoInput.value
  const newTodo = {
    name: todoName,
    completed: false,
    // id: Date.now().toString()
    // that's what kyle did
    id: new Date().valueOf().toString()
  }

  // render todo
  renderTodo(newTodo)
  allTodos.push(newTodo)
  saveTodos()
  todoInput.value = ''
})

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true)
  const listItem = templateClone.querySelector('.list-item')
  const textElement = templateClone.querySelector('[data-list-item-text]')

  listItem.dataset.todoId = todo.id
  textElement.innerText = todo.name
  list.appendChild(templateClone)
}

// load todos
function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
  return JSON.parse(todosString) || []
}

// save todos
function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos))
}

// delete todo
// complete todo
