
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()
// Щоб перевірити правильність виконання введіть команду: npx jest test3.jest.js






function applyStyles() {
    const container = document.querySelector('.create_elements');
  
    const mainElement = document.createElement('main');
    mainElement.className = 'mainClass check item';
  
    const myDiv = document.createElement('div');
    myDiv.id = 'myDiv';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'First paragraph';
  
    myDiv.appendChild(paragraph);
    mainElement.appendChild(myDiv);
    container.appendChild(mainElement);
}
  
window.onload = applyStyles;
  




module.exports = applyStyles;
