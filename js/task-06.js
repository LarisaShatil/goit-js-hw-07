// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const refs = {
  input: document.querySelector("#validation-input"),

};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    refs.input.textContent = event.currentTarget.value;
  if ((refs.input.textContent).length !== Number(refs.input.getAttribute("data-length"))) {
    refs.input.classList.add("invalid");
  } else {
    refs.input.classList.replace("invalid", "valid");
  }
};
