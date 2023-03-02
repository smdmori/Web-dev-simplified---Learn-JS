const childOne = document.querySelector('#child-one')

childOne.style.color = 'red'

childOne.parentElement.style.color = 'blue'

childOne.closest('#grand-parent').style.color = 'yellow'