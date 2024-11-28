import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icons from '/img/icons.svg';

const emailInput = document.querySelector('#contact-email');
const form = document.querySelector('.work-together-form');

const errorMessage = document.querySelector('.form-email-error-message');
const emailTick = document.querySelector('.form-email-tick');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

async function pushRequest(data) {
  try {
    const response = await axios.post(BASE_URL, data);
    if (response.status === 201) {
      const modalTitle = modal.element().querySelector('.form-modal-title');
      const modalMessage = modal.element().querySelector('.form-modal-message');
      modalTitle.textContent = response.data.title;
      modalMessage.textContent = response.data.message;

      modal.show();
      emailTick.classList.add('visually-hidden');
      form.reset();
    }
  } catch (error) {
    if (error.response) {
      // Server responded with a status outside the 2xx range
      iziToast.error({
        title: 'Server Error',
        message: error.response.data.message || 'Something went wrong on the server.',
        position: 'topRight',
        timeout: 5000,
      });
    } else if (error.request) {
      // Request was made but no response was received
      iziToast.error({
        title: 'Network Error',
        message: 'Unable to connect to the server. Please check your internet connection.',
        position: 'topRight',
        timeout: 5000,
      });
    } else {
      iziToast.error({
        title: 'Unexpected Error',
        message: error.message || 'An unknown error occurred.',
        position: 'topRight',
        timeout: 5000,
      });
    }
  }
}

const modal = basicLightbox.create(
  `
    <div class="form-modal-wrapper">
      <div class="form-modal">
        <div class="form-modal-icon-close-wrapper">
          <svg class="form-modal-icon-close" style="stroke: var(--black);">
            <use href="${icons}#icon-close" width="24" height="24"></use>
          </svg>
        </div>
        <div class="form-modal-text-container">
          <p class="form-modal-title"></p>
          <p class="form-modal-message"></p>
        </div>
      </div>
    </div>
`, {
    closable: true,
    onShow: (modal) => {
      document.body.classList.add('no-scroll');
    },
    onClose: (modal) => {
      document.body.classList.remove('no-scroll');
    },
  });

emailInput.addEventListener('input', () => {
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.classList.remove('visually-hidden');
    emailTick.classList.add('visually-hidden');
    emailInput.classList.add('error-color');
  } else {
    errorMessage.classList.add('visually-hidden');
    emailInput.classList.remove('error-color');
    emailTick.classList.remove('visually-hidden');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!form.elements['contact-email'].value) {
    errorMessage.classList.remove('visually-hidden');
  } else {
    if (errorMessage.classList.contains('visually-hidden')) {
      pushRequest({
        email: form.elements['contact-email'].value,
        comment: form.elements['contact-message'].value || '',
      });
    }
  }
});

modal.element().querySelector('.form-modal-icon-close').addEventListener('click', e => {
  e.preventDefault();

  modal.close();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.visible()) {
    modal.close();
  }
  modal.close();
});