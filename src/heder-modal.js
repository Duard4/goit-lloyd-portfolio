const openModalBtn = document.getElementById(' js-modal-btn');
const closeModalButton = document.getElementById('closeModal');
const menuModal = document.getElementById('menuModal');

openModalBtn.addEventListener('click', () => {
  menuModal.classList.add('open');
});

closeModalButton.addEventListener('click', () => {
  menuModal.classList.remove('open');
});

const aboutLink = document.querySelector('a[href="#About"]');
const projectsLink = document.querySelector('a[href="#Projects"]');
const contactsLink = document.querySelector('a[href="#Contacts"]');

aboutLink.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
  menuModal.classList.remove('open');
});

projectsLink.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
  menuModal.classList.remove('open');
});

contactsLink.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('Contacts').scrollIntoView({ behavior: 'smooth' });
  menuModal.classList.remove('open');
});
