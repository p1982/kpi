function applyDiscountAndId(fruits) {
    // Генеруємо унікальні ідентифікатори для кожного продукту за допомогою forEach
    // fruits.forEach((fruit, index) => {
    //     fruit.id = index + 1;
    // });

    // Генеруємо унікальні ідентифікатори для кожного продукту за допомогою reduce
    const fruitsWithId = fruits.reduce((acc, fruit, index) => {
        //створюємо ідентифікатор на основі індекса
        fruit.id = index + 1;
        return [...acc, fruit];
    },[])

    // Застосовуємо знижку 20% до ціни кожного фрукту
    const discountedFruits = fruitsWithId.map(fruit => {
        return {
            //копіюємо обєкт
            ...fruit,
            price: fruit.price * 0.8 // Застосовуємо знижку 20%
        };
    });
    //повертаємо новий масив
    return discountedFruits;
}

// Приклад використання:
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const discountedFruits = applyDiscountAndId(fruits);
console.log(discountedFruits);