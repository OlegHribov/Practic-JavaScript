'use strict';

let userName = prompt("Как вас зовут?");

let login = prompt("Кто там?", '');


if (login === 'admin') {

   let password = prompt("Пароль?", '');

   if (password === 'admin') {
   alert(`Здравствуйте ${userName}!`);
   } else if (password === null || password === '') {
      alert("Отмена!");
   } else {
      alert("Неверный пароль!");
   }

} else if (login === null || login === '') {
   alert("Отмена!");
}
else {
   alert("Я Вас не знаю!");
}


// let nameJS = prompt("Какое официальное название JavaScript?");

// if (nameJS === "EcmaScript") {
//    alert ("Верно!")
// } else {
//    alert ("Не знаете? EcmaSkript")
// }

// let number = prompt("Введите число");

// if (number > 0) {
//    alert (1)
// } else if (number < 0) {
//    alert (-1)
// } else {
//    alert (0)
// }
