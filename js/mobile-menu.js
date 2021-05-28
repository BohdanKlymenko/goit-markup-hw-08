(() => {
  const refs = {
    openMobilemenuBtn: document.querySelector('.mobile-menu__btn-open'),
    closeMobilemenuBtn: document.querySelector('.mobile-menu__btn-close'),
    mobilemenu: document.querySelector('.mobile-menu'),
  };

  refs.openMobilemenuBtn.addEventListener('click', toggleModal);
  refs.closeMobilemenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobilemenu.classList.toggle('is-hidden');
  }
})();