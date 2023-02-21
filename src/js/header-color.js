(() => {
  let hero = document.querySelector('.hero');
  let header = document.querySelector('.header');
  let noTransparency = document.querySelector('.header--no-transparency');

  hero.addEventListener('mouseover', () => {
    header.classList.add('mouse');
  });
  hero.addEventListener('mouseover', () => {
    noTransparency.classList.remove('header--no-transparency');
  });
  hero.addEventListener('mouseout', () => {
    header.classList.remove('mouse');
  });
})();
