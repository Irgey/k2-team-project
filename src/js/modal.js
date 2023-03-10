(() => {
  const refs = {
    openModalBtnFlow: document.querySelector('[data-modal-open-flower]'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeOpenModalBtn: document.querySelector('[data-modal-close-open]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtnFlow.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeOpenModalBtn.addEventListener('click', toggleModal);

  function toggleModal(event) {
    event.preventDefault();
    const isMenuOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);

    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('is-show');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
