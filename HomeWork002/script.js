//Задание 1  Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const block = document.querySelector('.block');

// let item = document.createElement('div');
// item.innerHTML = "Элемент внутри";
// item.setAttribute('class', 'item');
// item.classList.add('item_1');
// block.appendChild(item);

//Задание 2 Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const text = document.querySelector("div.elem div.content p.text");

// const h2 = text.previousElementSibling;
// console.log(h2);

// const content = text.parentElement;
// console.log(content);

// const image = content.previousElementSibling;
// console.log(image);

// let elem = text;
// while (elem.parentElement) {
//     if (elem.parentElement.tagName != 'BODY') {
//         elem = elem.parentElement;
//     } else {
//         break;
//     }
// }
// console.log(elem);

// Задание 3 
/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */

// const h2 = document.querySelector("div.item div.elem div.info h2.subtitle");

// let elem =h2;

// while (elem.parentElement) {
//     console.log(elem);
//     elem = elem.parentElement;
// }

// Задание 4.1

/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>

Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */

// const input = document.querySelector("form input[type='text']");
// const button = document.querySelector("button.btn");

// button.addEventListener("click", () => {
//     if (!input.value) {
//         const h2 = document.createElement('h2');
//         h2.innerHTML = "Some Text";
//         button.parentElement.appendChild(h2);
//         input.style.border = "1px solid red";
//     }
// });

// Задание 4.2

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const input = document.querySelector("form input[type='text']");
const button = document.querySelector("button.btn");

let delButton = document.createElement("button");
delButton.innerHTML = "Delete H2";
button.parentElement.appendChild(delButton);
let counter = 0;


button.addEventListener("click", () => {
    if (!input.value) {
        const h2 = document.createElement('h2');
        h2.innerHTML = "Some Text " + counter;
        button.parentElement.appendChild(h2);
        input.style.border = "1px solid red";
        counter++;
    }
});

delButton.addEventListener("click", () => {
    let h2 = document.querySelectorAll("form h2");
    if (h2.length > 0) {
        h2[h2.length - 1].remove();
    }
});