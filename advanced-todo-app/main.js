const todolist = document.querySelector('.todolist')
const inputTodo = document.querySelector('.input')
const addTodo = document.querySelector('.add-todo')
const form = document.querySelector('.form')

const todos = []

// create checkbox
const checkbox = document.createElement('input')
checkbox.setAttribute('type', 'checkbox')

/**
 *
 * @param {string} text create a new todo containing this text
 */
function createTodo(text) {
  const newTodo = {}

  newTodo.text = text
  newTodo.checked = false

  todos.push(newTodo)
  console.log(todos)

  showTodos(text)
}

// grab user input
inputTodo.addEventListener('input', grabUserInput)
function grabUserInput(e) {
  e.preventDefault()
  console.log(e.target.value)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  createTodo(inputTodo.value)
  inputTodo.value = ''
})

document.addEventListener('click', e => {
  console.log('e', e.target)
  if (e.target.matches('.delete')) {
  }

  if (e.target.matches('[type=checkbox]')) {
    if (e.target.checked === true) {
      console.log('true', e.target.checked)
      e.target.parentElement.classList.add('done')
      console.log('e.target', e.target.parentElement)
      showTodos()
    } else if (e.target.checked === false) {
      console.log('false')
      e.target.parentElement.classList.remove('done')
      console.log('e.target', e.target.parentElement)
      showTodos()
    }
  }
})

function showTodos() {
  todolist.innerHTML = ''

  todos.map(todo => {
    const newTodo = document.createElement('li')

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete')

    newTodo.appendChild(checkbox)
    newTodo.innerHTML += `${todo.text}`
    newTodo.checked = todo.checked

    newTodo.appendChild(deleteBtn)
    newTodo.classList.add('todo')

    todolist.appendChild(newTodo)
  })
}

function deleteTodo() {
  // delete todo from todos
  // call show todos
}
