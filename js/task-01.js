// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const ulCategories = Array.from(document.querySelectorAll('#categories > li.item'));
console.log(`В списке ${ulCategories.length} категории.`);


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const categoriesItems = elem => ulCategories.forEach(elem => console.log(`Категория: ${elem.querySelector('h2').textContent}  Количество элементов: ${elem.querySelectorAll('li').length}`));
categoriesItems(ulCategories);
