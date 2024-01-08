// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js


function applyStyles() {
  const bigHeader = document.getElementById('title');
  const firstEl = document.getElementById('myDiv').firstElementChild;
  const secondEl = firstEl.nextElementSibling;
  const thirdEl = secondEl.nextElementSibling;
  const lastEl = document.getElementById('myDiv').lastElementChild;
  const list = document.getElementById('myList').childNodes;
  const invisible = document.getElementByTagName('span');

  bigHeader.style.backgroundColor = 'green';
  firstEl.style.fontWeight = 'bold';
  secondEl.style.color = 'red';
  thirdEl.style.textDecoration = 'underline';
  lastEl.style.fontStyle = 'italic';

  for (const listItem of listItems) {
    listItem.style.display = 'inline';
    listItem.style.marginRight = '0';
  }

  invisible.style.visibility = 'hidden';
}

window.onload = applyStyles;

// module.exports = applyStyles;
