const npModal = document.getElementById('modal-np');
const npModalClose = document.getElementById('modal-np-close');

npModalClose.addEventListener('click', () => {
  npModal.close();
});

const goldModal = document.getElementById('modal-gold');
const goldModalClose = document.getElementById('modal-gold-close');

goldModalClose.addEventListener('click', () => {
  goldModal.close();
});

const silverModal = document.getElementById('modal-silver');
const silverModalClose = document.getElementById('modal-silver-close');

silverModalClose.addEventListener('click', () => {
  silverModal.close();
});

const bronzeModal = document.getElementById('modal-bronze');
const bronzeModalClose = document.getElementById('modal-bronze-close');

bronzeModalClose.addEventListener('click', () => {
  bronzeModal.close();
});