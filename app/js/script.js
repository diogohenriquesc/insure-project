const header = document.querySelector('.header')
const menuToggle = document.querySelector('.header__toggle');


menuToggle.addEventListener('click', () => {
  header.classList.toggle('open');
  document.body.classList.toggle('locked');
});