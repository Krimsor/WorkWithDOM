/* <div id="block">
	<p>1</p>
	<p>2</p>
</div> */

// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

// const blockElement = document.getElementById('block')
// console.log(blockElement);

// const paragraphElement = document.getElementsByTagName('p');
// console.log(paragraphElement[0].innerHTML);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const linkEl = document.getElementsByClassName('link');
// linkEl[0].innerHTML = 'link text js';
// linkEl[0].href = 'https:developer.mozilla.org/ru/';

// const imageEl = document.getElementsByTagName('img');
// imageEl[0].src = 'https://vean-tattoo.com/media/images/007_8tbf2SD.original.format-jpeg.jpg'


// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 

// const paragraphEl = document.createElement('p');
// paragraphEl.innerHTML = 'Новый текстовый элемент';

// const divEl = document.getElementsByClassName('content')[0];

// const button = document.createElement('button');
// button.innerHTML = 'Click me';
// let counter = 0;

// divEl.appendChild(button);

// button.onclick = function() {
//     counter++;
//     console.log(counter);
// };

// divEl[0].appendChild(paragraphEl);

// paragraphEl.remove();


// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const divEl = document.getElementsByClassName('content')[0];

// const button = document.createElement('button');
// button.innerHTML = 'Отправить';

// divEl.appendChild(button);

// button.onclick = function() {
//     button.innerHTML = 'Текст отправлен'    
// };

// const arr = ['Лист 1', 'Лист 2', 'Лист 3'];

// const ulElement = document.createElement('ul');

// for (let item in arr) {
//     let liElement = document.createElement('li');
//     liElement.innerHTML = arr[item];
//     ulElement.appendChild(liElement);
// }

// divEl.appendChild(ulElement);
