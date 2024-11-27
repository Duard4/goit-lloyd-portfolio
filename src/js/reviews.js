import axios from 'axios';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewsList = document.querySelector('.reviews-list');

// Initialize swiper.js for slider
export function reviewsSection() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // Install modules
    modules: [Keyboard, Navigation],
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
}

export async function fetchReviews() {
  try {
    const response = await axios.get(`${BASE_URL}`);
    if (response.data.length === 0) {
      reviewsList.innerHTML = 'No reviews found.';
    } else {
      reviewsList.insertAdjacentHTML(
        'beforeend',
        renderFunction(response.data)
      );
    }
  } catch (error) {
    if (error) {
      renderError();
      iziToast.error({
        title: '404 Error',
        message: 'The requested URL was not found.',
        position: 'bottomCenter',
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while loading data.',
        position: 'bottomCenter',
      });
    }
  }
}

function renderFunction(reviews) {
  return reviews
    .map(
      ({ author, avatar_url, review, _id }) =>
        `<li class="swiper-slide" id="${_id}">
           <p class="card-text">${review}</p>
           <div class="card-person-info">
             <img class="card-avatar" src="${avatar_url}" alt="${author}" width="40" height="40"/>
             <p class="card-author">${author}</p>
           </div>
       </li> `
    )
    .join('');
}

function renderError() {
  const markupError = `<li class="swiper-slide error-styles">
  <h2 class="error-code">404</h2>
  <p class="error-text">Not found</p>
  </li>`;
  reviewsList.innerHTML = markupError;
}
