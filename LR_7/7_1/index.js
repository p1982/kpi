//пошук елемента кнопку по ідентифікатару
const showButton = document.getElementById('showButton');
//пошук елемента інпуту по ідентифікатару
const inputField = document.getElementById('inputField');

//прослуховувая події на кнопці
showButton.addEventListener('click', () => {
    //забираємо значення з інпуту
    const inputValue = inputField.value;
    //вивід значення в консоль
    console.log('Значення:', inputValue);
});