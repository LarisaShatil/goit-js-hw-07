// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const refs = {
  input: document.querySelector("#name-input"),
  spanName: document.querySelector("#name-output"),
};

refs.input.addEventListener('input', spanNameChange);

function spanNameChange(event) {
 (event.currentTarget.value === "")? (refs.spanName.textContent = "незнакомец") : (refs.spanName.textContent = event.currentTarget.value)
};
