# WorkWithDOM

# *Семинар 1 HomeWork001*

1.1 DirectoryHW1 = задания семинара (1).
script.js - задания семинара (1).

1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

5. Выведите содержимое тега title в консоль.

6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

7. Создайте тег<p>, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

8. Удалите тег h6 на странице.

# *Семинар 2 HomeWork002*

Повторить то, что было на семинаре, либо решить следущее задание:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework 5</title>
</head>

<body>


Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

```
<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<script>
    "use strict";
[]()
[]()
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
[]()
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
[]()
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]()
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
[]()
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]()
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
[]()
7. Удалите атрибут type у элемента с классом "dropdown-toggle".

# *Семинар 3 HomeWork003*

