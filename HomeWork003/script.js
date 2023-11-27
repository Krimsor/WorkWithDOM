// Задание 1 

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// window.onload = function () {
//     console.log("страница загрузилась");
// }

// const btnEl = document.querySelector('.btn');
// btnEl.addEventListener('click', function () {
//     console.log('событие onclick');
// })

// Задание 2

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let btn3 = document.querySelector('.btn3');

// let func = function(e){
//     console.log(e.target);
// };

// btn1.addEventListener('click', func);
// btn2.addEventListener('click', func);
// btn3.addEventListener('click', func);

// let btn4 = document.querySelector('.btn4');
// let btn5 = document.querySelector('.btn5');

// let counter = 0;
// btn4.addEventListener('click', function(){
//     counter++;
//     console.log(counter);
// });

// btn5.addEventListener('click', function(e){
//     e.target.innerHTML = 'Вы нажали на эту кнопку';
// });

// Задание 3

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// let divContainer = document.querySelector('.container');
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// console.log(divContainer);

// btn1.addEventListener('click', function (e) {
//     const h1 = document.createElement('h1');
//     h1.innerHTML = 'Заголовок';
//     console.log(h1);
//     divContainer.appendChild(h1);
// });

// btn2.addEventListener('click', function (e) {
//     let h1 = divContainer.querySelectorAll('h1');
//     if (h.lenght > 0) {
//         h[h.lenght - 1].remove();
//     }

// });


// let btn3 = document.querySelector('.btn3');

// btn3.addEventListener('mouseover', function (e) {
//     console.log('Вы навели на данную кнопку');
// });

// btn3.addEventListener('mouseout', function (e) {
//     console.log('Наведения на кнопку больше нет');
// });

// Задание 4.1

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click

// let ulEl = document.querySelector('.menu');
// let btn1 = document.querySelector('.bt1');
// let btn2 = document.querySelector('.bt2');
// let btn3 = document.querySelector('.bt3');

// btn1.addEventListener('click', function () {
//     const li = document.crateElement('li');
//     li.innerHTML = 'newlist';
//     ulEl.appendChild(li);
// });

// btn2.addEventListener('click', function () {
//     let li = elEl.querySelectorAll('li');
//     if (li.lenght > 0) {
//         li[0].remove();
//     }
// })

// btn3.addEventListener('click', function (e) {
//     e.target.classList.add('click');
// });

// Задание 4.2

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”


