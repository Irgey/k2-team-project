(() => {
  let hero = document.querySelector('.hero');
  let header = document.querySelector('.header');
  hero.addEventListener('mouseenter', () => {
    header.classList.add('mouse');
  });
  hero.addEventListener('mouseleave', () => {
    header.classList.remove('mouse');
  });
})();
