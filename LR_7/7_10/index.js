//пошук інпуту
const input = document.querySelector('input');
//пошук кнопки створення
const createBtn = document.querySelector('[data-create]');
//пошук кнопки видалення
const destroyBtn = document.querySelector('[data-destroy]');
//пошук контейнера для вставки
const boxesContainer = document.getElementById('boxes');

//Функція рандомного генерування кольору 
function getRandomHexColor() {
    //повернення рядка округлення, генерація від 0-1 - на колір перетворенно на рядок в 16річній системі 
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

//Функція створення квадратів
function createBoxes(amount) {
    //очищення
    destroyBoxes()
    //цикл кількості
    for (let i = 0; i < amount; i++) {
        //створення елементу
        const box = document.createElement('div');
        //додавання классу до 1 елементу
        box.classList.add('box');
        //генерація ширини
        box.style.width = `${30 + i * 10}px`;
        //генерація висоти
        box.style.height = `${30 + i * 10}px`;
        //генерація кольору
        box.style.backgroundColor = getRandomHexColor();
        //вставлення елементу
        boxesContainer.appendChild(box);
    }
}

//Функція очищення
function destroyBoxes() {
    //очищення контейнера
    boxesContainer.innerHTML = '';
}

//прослуховувая події 
createBtn.addEventListener('click', () => {
    //перетворення значення інпута з рядка на число
    const amount = Number(input.value);
    //перевірка на валідність числа
    if (amount >= 1 && amount <= 100) {
        //виклик функції створення - передаємо кількість квадратів
        createBoxes(amount);
        //очищення інпуту
        input.value = '';
    } else {
        //повідомлення про не валідність
        alert('Please enter a number between 1 and 100.');
    }
});

//прослуховування події очищення
destroyBtn.addEventListener('click', destroyBoxes);