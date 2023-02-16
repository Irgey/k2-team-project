const header = document.querySelector('.header');
let previousScrollPosition = 0;

window.addEventListener('scroll', function () {
  if (previousScrollPosition > window.scrollY) {
    console.log('scrollTop');
    header.classList.add('header-show');
    header.classList.remove('header-hidden');
  } else {
    console.log('scrollBottom');
    header.classList.add('header-hidden');
    header.classList.remove('header-show');
  }

  previousScrollPosition = window.scrollY;
});
