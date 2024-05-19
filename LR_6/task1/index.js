// Функція для створення об'єкту товару з унікальним ідентифікатором та виклику колбеку
function createProduct(obj, callback) {
    const id = generateUniqueId(); // Генеруємо унікальний ідентифікатор
    const product = { ...obj, id }; // Створюємо об'єкт товару з новим ідентифікатором
    callback(product); // Викликаємо колбек та передаємо створений об'єкт
}

// Функція для генерації унікального ідентифікатора
function generateUniqueId() {
    return Math.random().toString(36).slice(2, 9); // Генеруємо рандомний рядок
}

// Колбек для логування об'єкту продукту
function logProduct(product) {
    console.log("Product:", product);
}

// Колбек для логування загальної вартості товару
function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity; // Розраховуємо загальну вартість товару
    console.log("Total price:", totalPrice);
}

// Приклад використання:

const myProduct = {
    name: "Example Product",
    price: 20,
    quantity: 3
};

// Створення продукту з унікальним ідентифікатором та виклик колбеків для логування
createProduct(myProduct, logProduct);
createProduct(myProduct, logTotalPrice);