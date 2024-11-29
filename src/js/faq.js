import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false, 
    openOnInit: [0], 
    activeClass: 'is-active',
    beforeOpen: (currentElement) => {
      const trigger = currentElement.querySelector('.ac-trigger');
      if (trigger) {
        trigger.classList.add('is-active');
      }
    },
    onClose: (currentElement) => {
      const trigger = currentElement.querySelector('.ac-trigger');
      if (trigger) {
        trigger.classList.remove('is-active');
      }
    },
  });
});
