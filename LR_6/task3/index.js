const medicines = {
    "Агалгін": new Date("2022-05-01"),
    "Ношпа": new Date("2025-07-02"),
    "Альфахолін": new Date("2024-12-21"),
    "Аспірин": new Date("2022-08-15"),
    "Аспаркам": new Date("2024-04-18"),
};

// Отримуємо лише назви препаратів у масиві
const medicineNames = Object.keys(medicines);

// Фільтруємо медикаменти, які ще не протермінувалися
const currentDate = new Date();
const validMedicines = medicineNames.filter(medicine => medicines[medicine] > currentDate);

// Сортуємо медикаменти у хронологічному порядку 
validMedicines.sort((a, b) => medicines[a] - medicines[b]);

// Виводимо результат у консоль
console.log(validMedicines);