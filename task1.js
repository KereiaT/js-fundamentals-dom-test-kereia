// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку, в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінн secondEl
// четвертний елемент - змінна fourthEl
//третій елемент - змінна thirdEl
// для перевірки завдання запустити команду npx jest task1.test.js


const firstEl = document.getElementById('list').firstElementChild;
const lastEl = document.getElementById('list').lastElementChild;
const secondEl = firstEl.nextElementSibling;
const fourthEl = firstEl.previousElementSibling;
const thirdEl = secondEl.nextElementSibling;


// module.exports = {
//   firstEl,
//   lastEl,
//   secondtEl,
//   fourthEl,
//   thirdtEl,
// };
