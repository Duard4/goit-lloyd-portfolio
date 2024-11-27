const openModalBtn = document.querySelector('.menu-icon');
const closeModalButton = document.getElementById('closeModal');
const menuModal = document.getElementById('menuModal');
const menuLinks = document.querySelectorAll('.menu_modal .order');

if (openModalBtn && closeModalButton && menuModal) {
  openModalBtn.addEventListener('click', () => {
    menuModal.classList.add('open');
  });

  closeModalButton.addEventListener('click', () => {
    menuModal.classList.remove('open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      menuModal.classList.remove('open');
    });
  });
} else {
  console.error('Ошибка: Один или несколько элементов не найдены.');
}
