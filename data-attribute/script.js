const buttons = document.querySelectorAll('[data-clicks]')

buttons.forEach(button => {
  button.addEventListener('click',e => {
    button.dataset.clicks = Number(button.dataset.clicks) + 1 

    console.log(button.dataset.clicks);
  })
})