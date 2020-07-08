let cardButtonsBuy = document.querySelectorAll('.card-button-buy');
let modalBuy = document.querySelector('.modal-buy');
let closeBtn = document.querySelector('.close-btn');

let writeUsButton = document.querySelector('.write-us-button');
let writeUs = document.querySelector('.write-us');
let closeWriteUs = document.querySelector('.close-btn-write-us');

let mapButtonActive = document.querySelector('.map-button-active');
let modalMap = document.querySelector('.modal-map');
let closeBtnMap = document.querySelector('.close-btn-map');

let buttonCreateOrder = document.querySelector('.button-create-order');
let buttonReturn = document.querySelector('.button-return');

let writeUsForm = document.querySelector('.write-us-form');
let name = document.querySelector('.name');
let email = document.querySelector('.e-mail');
let letter = document.querySelector('.letter');

cardButtonsBuy.forEach(function (item) {
  item.addEventListener('click', function () {
    modalBuy.classList.add('modal-buy-show');
  });
});


closeBtn.addEventListener('click', function () {
  modalBuy.classList.remove('modal-buy-show');
});

if (writeUsButton) {
  writeUsButton.addEventListener('click', function () {
    writeUs.classList.add('write-us-show');
  });
}

if (closeWriteUs) {
  closeWriteUs.addEventListener('click', function () {
    writeUs.classList.remove('write-us-show');
  });
}

if (mapButtonActive) {
  mapButtonActive.addEventListener('click', function (e) {
    e.preventDefault();
    modalMap.classList.add('modal-map-show');
  });
}

if (closeBtnMap) {
  closeBtnMap.addEventListener('click', function () {
    modalMap.classList.remove('modal-map-show');
  });
}

if (buttonCreateOrder) {
  buttonCreateOrder.addEventListener('click', function () {
    modalBuy.classList.remove('modal-buy-show');
  });
}

if (buttonReturn) {
  buttonReturn.addEventListener('click', function () {
    modalBuy.classList.remove('modal-buy-show');
  });
}

if (writeUsForm) {
  writeUsForm.addEventListener('submit', function (evt) {

    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      writeUs.classList.remove('modal-error');
      writeUs.offsetWidth = writeUs.offsetWidth;
      writeUs.classList.add('modal-error');
    }
  });
};
