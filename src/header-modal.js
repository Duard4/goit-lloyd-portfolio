const openModalBtn = document.querySelector('.menu-icon');
const closeModalButton = document.getElementById('closeModal');
const menuModal = document.getElementById('menuModal');
const overalay = document.getElementById('overlay');

if (openModalBtn && closeModalButton && menuModal) {
  openModalBtn.addEventListener('click', () => {
    menuModal.classList.add('open');
    overalay.classList.add('open');
  });

  closeModalButton.addEventListener('click', () => {
    menuModal.classList.remove('open');
    overalay.classList.remove('open');
  });
} else {
  console.error('Ошибка: Один или несколько элементов не найдены.');
}
