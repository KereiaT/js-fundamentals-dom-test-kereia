// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 


function getDataFromForm() {
    const name = document.querySelector('input[name="fio"]').value;
    const phoneNumber = document.querySelector('input[name="phone"]').value;
    const dateOfBirth = document.querySelector('input[name="birthday"]').value;
    const emailAddress = document.querySelector('input[name="email"]').value;
  
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Email Address:', emailAddress);
  
    return {
      name: name,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      emailAddress: emailAddress
    };
}
  
getDataFromForm();
  


// module.exports = {
//     name,
//     phoneNumber,
//     dataOfBirth,
//     emailAddress
// };