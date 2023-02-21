(() => {
  const refs = {
    openModalBtnTy: document.querySelector('[data-modal-open-Ty]'),
    closeModalBtnTy: document.querySelector('[data-modal-close-Ty]'),
    closeOpenModalBtnTy: document.querySelector('[data-modal-close-open-Ty]'),
    modalTy: document.querySelector('[data-modal-Ty]'),
  };

  refs.openModalBtnTy.addEventListener('click', toggleModalTy);
  refs.closeModalBtnTy.addEventListener('click', toggleModalTy);
  refs.closeOpenModalBtnTy.addEventListener('click', toggleModalTy);

  function toggleModalTy(event) {
    event.preventDefault();
    refs.modalTy.classList.toggle('is-hidden');
    refs.modalTy.classList.toggle('is-show');

    const isMenuOpen =
      refs.openModalBtnTy.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtnTy.setAttribute('aria-expanded', !isMenuOpen);

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
