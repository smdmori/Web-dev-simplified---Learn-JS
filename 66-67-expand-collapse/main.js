document.addEventListener('click', e => {
  if (!e.target.matches('.expand-button')) return

  const card = e.target.closest('.card')

  const cardBody = card.querySelector('.card-body')

  cardBody.classList.toggle('show')

  const expandBtn = card.querySelector('.expand-button')
  // if (cardBody.classList.contains('show')) {
  //   expandBtn.textContent = 'Collapse'
  // } else {
  //   expandBtn.textContent = 'Expand'
  // }

  // that's what kyle did
  expandBtn.textContent === 'Collapse' ? (expandBtn.textContent = 'Expand') : (expandBtn.textContent = 'Collapse')
})
