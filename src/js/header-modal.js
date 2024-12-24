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
    event.preventDefault();

    const href = item.querySelector('a').getAttribute('href');
    createExplosion(event.clientX, event.clientY);

    const explosion = document.querySelector('.explosion');

    explosion.addEventListener('animationend', () => {
      window.location.href = href;
    });
  });
});

function createExplosion(x, y) {
  const explosion = document.createElement('div');
  explosion.className = 'explosion';
  explosion.style.left = `${x}px`;
  explosion.style.top = `${y}px`;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.setProperty('--randomX', (Math.random() - 0.5) * 2);
    particle.style.setProperty('--randomY', (Math.random() - 0.5) * 2);
    explosion.appendChild(particle);
  }

  document.body.appendChild(explosion);

  explosion.addEventListener('animationend', () => {
    explosion.remove();
  });
}
