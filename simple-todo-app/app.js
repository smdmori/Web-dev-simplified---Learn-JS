// 1. Select all elements
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
const items = document.querySelectorAll('.list-item')
const list = document.querySelector('#list')
// 2. when I submit the form, add a new element
form.addEventListener('submit', e => {
  e.preventDefault()
  // 1. Create a new item
  const item = document.createElement('p')
  item.innerText = input.value
  item.classList.add('list-item')
  // const text = document.createTextNode(input.value)
  // item.appendChild(text)

  // 2. Add that item to the list
  list.appendChild(item)

  // 3. Clear input
  input.value = ''

  // 4. Setup event listener to delete item when clicked
  item.addEventListener('click', e => {
    // e.target.remove()
    // list.removeChild(item)
    item.remove()
  })
})
