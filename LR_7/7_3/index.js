//пошук елемента інпуту по ідентифікатору
const inputField = document.getElementById('inputField');
//пошук елемента кнопки по ідентифікатору
const toggleButton = document.getElementById('toggleButton');

//прослуховувая події на кнопці
toggleButton.addEventListener('click', () => {
    //перевірка типу чи дорівнює тексту
    if (inputField.type === 'text') {
        //встановлення типу пасворда
        inputField.type = 'password';
        //зміна тексту на кнопці
        toggleButton.textContent = 'Приховати';
    } else {
        //встановлення типу текста
        inputField.type = 'text'
        //зміна тексту на кнопці
        toggleButton.textContent = 'Розкрити';
    }
});