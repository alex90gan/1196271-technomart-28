let cardButtonsBuy = document.querySelectorAll('.card-button-buy');
let modalBuy = document.querySelector('.modal-buy');
let closeBtn = document.querySelector('.close-btn');

let writeUsButton = document.querySelector('.write-us-button');
let writeUs = document.querySelector('.write-us');
let closeWriteUs = document.querySelector('.close-btn-write-us');



cardButtonsBuy.forEach(function(item) {
    item.addEventListener('click', function() {
        modalBuy.classList.add('modal-buy-show');
    });
});


closeBtn.addEventListener('click', function() {
    modalBuy.classList.remove('modal-buy-show');
});


writeUsButton.addEventListener('click', function() {
    writeUs.classList.add('write-us-show');
});


closeWriteUs.addEventListener('click', function() {
    writeUs.classList.remove('write-us-show');
});