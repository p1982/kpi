//пошук кнопки
const button = document.querySelector('.change-color');
//пошук елементу для вставки
const spanColor = document.querySelector('.color');
//функція генерації кольору
function getRandomHexColor() {
    //повернення рядка округлення, генерація рандомного числа від 0 до 1 * на кількість кольорів, перетворенно на строку
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}


//впрослуховувач події
button.addEventListener('click', () => {
    //виклик функції генерації кольору
    const randomColor = getRandomHexColor();
    //вставка кольору
    document.body.style.backgroundColor = randomColor;
    //вставлення тексту
    spanColor.textContent = randomColor;
});