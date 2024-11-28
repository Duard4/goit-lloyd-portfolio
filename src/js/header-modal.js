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

document.querySelectorAll('.li-order').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault(); // Останавливаем стандартное поведение перехода

    const href = item.querySelector('a').getAttribute('href'); // Получаем ссылку
    createExplosion(event.clientX, event.clientY); // Создаем анимацию взрыва

    // Получаем элемент взрыва
    const explosion = document.querySelector('.explosion');

    // Добавляем обработчик завершения анимации
    explosion.addEventListener('animationend', () => {
      // Переходим на новую секцию после завершения анимации
      window.location.href = href;
    });
  });
});

function createExplosion(x, y) {
  const explosion = document.createElement('div');
  explosion.className = 'explosion';
  explosion.style.left = `${x}px`;
  explosion.style.top = `${y}px`;

  // Создаем частицы с случайным направлением
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.setProperty('--randomX', (Math.random() - 0.5) * 2); // Случайное значение для X
    particle.style.setProperty('--randomY', (Math.random() - 0.5) * 2); // Случайное значение для Y
    explosion.appendChild(particle);
  }

  document.body.appendChild(explosion);

  // Удаляем элемент после завершения анимации
  explosion.addEventListener('animationend', () => {
    explosion.remove();
  });
}
