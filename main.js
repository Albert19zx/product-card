const productCards = document.querySelectorAll('.product');
const changeAllCardsColorButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#d0fad0';
const redColorHash = '#eedada';

changeAllCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductCard = document.querySelector('.product');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redColorHash
})

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open('https://www.google.com')
  } else {
    return;
  }
}

const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

document.addEventListener('DOMContentLoaded', function() {

  const title = document.querySelector('h1');

  title.addEventListener('mouseenter', function() {
  console.log(title.textContent);
  });
})

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('color-toggle-btn');

  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      toggleButton.classList.toggle('color2');
    });
  }
});