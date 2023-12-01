// Задание 1 

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// let checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// let spanEl = document.createElement('span');
// spanEl.innerHTML = 'Согласен с условиями';
// let btn = document.createElement('button');
// btn.innerHTML = 'Отправить';
// const containerEl = document.querySelector('.container');
// containerEl.appendChild(checkbox);
// containerEl.appendChild(spanEl);
// containerEl.appendChild(btn);

// btn.addEventListener('click', (e) => {
//     if (!checkbox.checked) {
//         let spanEl2 = document.createElement('span');
//         spanEl2.innerHTML = 'Необходимо согласиться с условиями';
//         containerEl.appendChild(spanEl2);
//     } 
// });   

// Задание 2 

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// let radio1 = document.createElement('input');
// radio1.type = 'radio';
// radio1.name = 'dink';

// let radio2 = document.createElement('input');
// radio2.type = 'radio';
// radio2.name = 'dink';

// let spanEl = document.createElement('span');
// spanEl.innerHTML = 'Чай';
// let spanE2 = document.createElement('span');
// spanE2.innerHTML = 'Кофе';
// const btn = document.createElement('button');
// btn.innerHTML = 'Отправить';

// const containerEl = document.querySelector('.container');
// containerEl.appendChild(radio1);
// containerEl.appendChild(spanEl);
// containerEl.appendChild(radio2);
// containerEl.appendChild(spanE2);
// containerEl.appendChild(btn);

// btn.addEventListener('click', (e) => {
//     if (radio1.checked) {
//         alert('Чай закончился');
//     }
//     if (radio2.checked) {
//         alert('Кофе закончился');
//     }
// });

// Задание 3

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// let inputBox = document.createElement('input');
// inputBox.type = 'text';
// let btn = document.createElement('button');
// btn.innerHTML = 'Отправить';
// const containerEl = document.querySelector('.container');
// containerEl.appendChild(inputBox);
// containerEl.appendChild(btn);

// const password = 'test123';

// btn.addEventListener('click', (e) => {
//     if(inputBox.value === password) {
//         inputBox.className = 'input-green';
//     } else {
//         inputBox.className = 'input-red';
//         alert("пароль неверный");
//     }    
// });


// Задание 4 

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// let inputBox = document.createElement('input');
// inputBox.type = 'text';
// let txt = document.createElement('h1');
// txt.innerHTML = 'Заголовок';

// const containerEl = document.querySelector('.container');
// containerEl.appendChild(inputBox);
// containerEl.appendChild(txt);
// inputBox.addEventListener('input', (e) => {
//     txt.innerHTML = e.target.value;
// });

// inputBox.addEventListener('change', (e) => {
//     txt.innerHTML = e.target.value;
// });






