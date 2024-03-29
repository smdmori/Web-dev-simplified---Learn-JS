import checkArrayLength from './_checkArrayLength.js'
import pushToArray from './_pushToArray.js'

// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector('#form')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#password-confirmation')
const termsInput = document.querySelector('#terms')
const errorsList = document.querySelector('.errors-list')
const errorsContainer = document.querySelector('.errors')

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener('submit', e => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorMessages = []

  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
  const usernameValue = usernameInput.value
  let error = checkArrayLength(usernameValue, 6, 'Username')

  if (error) {
    pushToArray(error, errorMessages)
  }

  //      2. Ensure the password is at least 10 characters long
  const passwordValue = passwordInput.value
  const passError = checkArrayLength(passwordValue, 10, 'Password')

  if (passError) {
    pushToArray(passError, errorMessages)
  }

  //      3. Ensure the password and confirmation password match
  const passwordConfirmValue = passwordConfirmInput.value

  if (passwordConfirmValue !== passwordValue || passError) {
    error = 'Password should match.'
    pushToArray(error, errorMessages)
  }

  //      4. Ensure the terms checkbox is checked
  if (termsInput.checked !== true) {
    error = 'Terms must be accepted.'
    pushToArray(error, errorMessages)
  }

  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMessages.length) {
    showErrors(errorMessages)
    e.preventDefault()
  } else {
    clearErrors()
  }
})

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while (errorsList.childElementCount) {
    // errorsList.innerHTML = ''
    errorsList.firstChild.remove()
  }
  errorsContainer.classList.remove('show')
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  clearErrors()

  errorMessages.map(error => {
    errorsList.innerHTML += `<li>${error}</li>`
  })

  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorsContainer.classList.add('show')
}
