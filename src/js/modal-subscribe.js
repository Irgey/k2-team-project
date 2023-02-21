(() => {
  const refs = {
    openModalBtnSubscribe: document.querySelector(
      '[data-modal-open-Subscribe]'
    ),
    closeModalBtnSubscribe: document.querySelector(
      '[data-modal-close-Subscribe]'
    ),
    closeOpenModalBtnSubscribe: document.querySelector(
      '[data-modal-close-open-Subscribe]'
    ),
    modalSubscribe: document.querySelector('[data-modal-Subscribe]'),
  };
  refs.openModalBtnSubscribe.addEventListener('click', toggleModalSubscribe);
  refs.closeModalBtnSubscribe.addEventListener('click', toggleModalSubscribe);
  refs.closeOpenModalBtnSubscribe.addEventListener(
    'click',
    toggleModalSubscribe
  );

  function toggleModalSubscribe() {
    refs.modalSubscribe.classList.toggle('is-hidden');
    refs.modalSubscribe.classList.toggle('is-show');
  }
})();