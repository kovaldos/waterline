/* eslint-disable no-unused-vars */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import slick from 'slick-carousel';
export function initModalSlider() {
  $('.modal--genplan__slider').slick({
	infinite: false,
  });
}

