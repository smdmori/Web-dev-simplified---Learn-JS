const modal = document.querySelector('#modal')
const openModalBtn = document.querySelector('#open-modal-btn')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

openModalBtn.addEventListener('click', () => {
  modal.classList.add('open')
  overlay.classList.add('open')
})

closeModalBtn.addEventListener('click', closeModalAndOverlay)

overlay.addEventListener('click', closeModalAndOverlay)

function closeModalAndOverlay() {
  modal.classList.remove('open')
  overlay.classList.remove('open')
}
