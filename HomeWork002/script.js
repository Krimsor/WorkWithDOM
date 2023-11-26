//Задание 1  Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

const block = document.querySelector('.block');

let item = document.createElement('div');
item.innerHTML = "Элемент внутри";
item.setAttribute('class', 'item');
item.classList.add('item_1');
block.appendChild(item);