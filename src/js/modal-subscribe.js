(() => {
  const refs = {
    openModalBtnSubscribe: document.querySelector(
      '[data-modal-open-Subscribe]'
    ),
    closeModalBtnSubscribe: document.querySelector(
      '[data-modal-close-Subscribe]'
    ),
    modalSubscribe: document.querySelector('[data-modal-Subscribe]'),
  };
  refs.openModalBtnSubscribe.addEventListener('click', toggleModalSubscribe);
  refs.closeModalBtnSubscribe.addEventListener('click', toggleModalSubscribe);

  function toggleModalSubscribe() {
    refs.modalSubscribe.classList.toggle('is-hidden');
    refs.modalSubscribe.classList.toggle('is-show');

    const isMenuOpen =
      refs.modalSubscribe.getAttribute('aria-expanded') === 'true' || false;
    refs.modalSubscribe.setAttribute('aria-expanded', !isMenuOpen);

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
