function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showTemperature('Казань', 30);

const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(300000000);

const product = 'Наушники';
const price = 4500;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретены. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(5000);

function calculateSum(a, b) {
  return a + b;
}

console.log(calculateSum(10, 5));

const userName = 'Альберт';
let userAge = 36;
const isStudent = true;

console.log(userAge);