const todolist = document.querySelector('.todolist')
const inputTodo = document.querySelector('.input')
const addTodo = document.querySelector('.add-todo')
const form = document.querySelector('.form')

const todos = []

/**
 *
 * @param {string} text create a new todo containing this text
 * @param {Array} todos an array that contains list of all todos
 */
function createTodo(text, todos) {
  const newTodo = {}

  newTodo.id = Date.now()
  newTodo.text = text
  newTodo.checked = false

  todos.push(newTodo)
  // console.log('create todo todos', todos)

  showTodos(todos)
}

// grab user input
// inputTodo.addEventListener('input', grabUserInput)
// function grabUserInput(e) {
//   e.preventDefault()
//   // console.log(e.target.value)
// }

form.addEventListener('submit', e => {
  e.preventDefault()
  createTodo(inputTodo.value, todos)
  inputTodo.value = ''
})

// checkbox handler
document.addEventListener('click', e => {
  // console.log('checkbox handler', e)
  if (e.target.matches('.delete')) {
  }

  if (e.target.matches('[type=checkbox]')) {
    // console.log('before', e.target.checked)
    // if (e.target.checked === true) {

    const find = todos.find(todo => e.target.parentElement.dataset['id'] === String(todo.id))
    find.checked = !find.checked
    console.log('find', find)

    // console.log('after', e.target.checked)

    console.log('matches', todos)
    showTodos(todos)

    // e.target.parentElement.classList.add('done')
    console.log('e.target', e.target.parentElement.firstElementChild.checked)
    e.target.parentElement.firstElementChild.checked = find.checked
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

/**
 *
 * @param {Array} todos list of all todos
 */
function showTodos(todos) {
  todolist.innerHTML = ''

  todos.map(todo => {
    // create a new li element
    const newLi = document.createElement('li')

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete')

    // create checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    console.log('checked', todo.checked)
    // checkbox.setAttribute('checked', todo.checked)

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
    console.log('what', todo)
  })
}

function deleteTodo() {
  // delete todo from todos
  // call show todos
}

// showTodos
// todolist.map(todo => {})
