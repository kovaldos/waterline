// Добавляем ссылки в svg-маску на генплане -- Начало --

import {modals} from './modals/init-modals';
const genplanItems = () => {
  const parentEl = document.querySelector('.genplan');
  if (parentEl) {
    const maskItems = parentEl.querySelectorAll('.genplan__item');
    maskItems.forEach((item, index) => {
      // item.setAttribute('data-status', '');
      item.setAttribute('tabindex', '1');
      item.setAttribute('data-id', (index + 1));
      // item.setAttribute('data-open-modal', 'genplan');
      // item.setAttribute('data-href', '/uchastok-n' + (index + 1));
      // item.addEventListener('click', (e) => {
      //   document.location = e.target.dataset.href;
      // });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          modals.open('genplan');
        }
      });
    });
  }
};

export {genplanItems};

// Добавляем ссылки в svg-маску на генплане -- Конец --

