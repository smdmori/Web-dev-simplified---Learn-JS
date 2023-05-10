const todolist = document.querySelector('.todolist')
const inputTodo = document.querySelector('.input')
const addTodo = document.querySelector('.add-todo')
const form = document.querySelector('.form')

const todos = []

/**
 *
 * @param {string} text create a new todo containing this text
 */
function createTodo(text) {
  const newTodo = {}

  newTodo.id = Date.now()
  newTodo.text = text
  newTodo.checked = false

  todos.push(newTodo)
  console.log(todos)

  showTodos()
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

// checkbox handler
document.addEventListener('click', e => {
  console.log('checkbox handler', e)
  if (e.target.matches('.delete')) {
  }

  if (e.target.matches('[type=checkbox]')) {
    console.log('before', e.target.checked)
    // if (e.target.checked === true) {

    const find = todos.find(todo => e.target.parentElement.dataset['id'] === String(todo.id))

    console.log('find', find)

    find.checked = !find.checked
    console.log('after', e.target.checked)

    console.log('marches', todos)
    showTodos()

    // e.target.parentElement.classList.add('done')
    console.log('e.target', e.target.parentElement)
    // FIXME: here it is a bug
    // it will not save todo.checked
    // showTodos()
    // } else if (e.target.checked === false) {
    //   console.log('false')
    //   e.target.parentElement.classList.remove('done')
    //   console.log('e.target', e.target.parentElement)
    //   showTodos()
    // }
  }
})

function showTodos() {
  todolist.innerHTML = ''

  todos.map(todo => {
    const newLi = document.createElement('li')

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete')

    // create checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    newLi.appendChild(checkbox)
    newLi.innerHTML += `${todo.text}`
    newLi.checked = todo.checked
    if (newLi.checked === true) {
      console.log('TT')
      newLi.classList.add('done')
    } else if (newLi.checked === false) {
      console.log('FF')
      newLi.classList.remove('done')
    }

    newLi.appendChild(deleteBtn)
    newLi.classList.add('todo')
    newLi.dataset['id'] = todo.id
    console.log('newLi.id', newLi.id)

    todolist.appendChild(newLi)

    console.log('todos', todos)
  })
}

function deleteTodo() {
  // delete todo from todos
  // call show todos
}

// showTodos
// todolist.map(todo => {})
