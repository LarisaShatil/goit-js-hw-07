// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// 1 version
// let counterValue = 0;

// const btnIncrement = document.querySelector("[data-action='increment']");
// const btnDecrement = document.querySelector("[data-action='decrement']");

// function increment() {
//   counterValue += 1;
//   document.getElementById('value').innerHTML = counterValue;
// };

// function decrement() {
//   counterValue -= 1;
//   document.getElementById('value').innerHTML = counterValue;
// };

// btnIncrement.addEventListener('click', increment);
// btnDecrement.addEventListener('click', decrement);

// 2 version

const counterValue = {
  spanValue: document.querySelector("#value"),
  btnDecrement: document.querySelector("[data-action='decrement']"),
  btnIncrement: document.querySelector("[data-action='increment']"),
};

function increment() {
  let total = Number(counterValue.spanValue.textContent);
  total += 1;
  counterValue.spanValue.textContent = total;
};

function decrement() {
  let total = Number(counterValue.spanValue.textContent);
  total -= 1;
  counterValue.spanValue.textContent = total;
};


counterValue.btnIncrement.addEventListener('click', increment);
counterValue.btnDecrement.addEventListener('click', decrement);

