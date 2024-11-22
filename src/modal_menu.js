const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const modal = document.getElementById('modal');


menuButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});


closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});