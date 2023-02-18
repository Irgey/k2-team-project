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

  function toggleModalTy() {
    refs.modalTy.classList.toggle('is-hidden');
    refs.modalTy.classList.toggle('is-show');
  }
})();
