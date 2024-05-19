//початковий масив обєктів
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Використовуємо метод reduce для обчислення кількості кожного тегу
const tagCounts = tweets.reduce((acc, tweet) => {
    //перебираємо внутрішній масив задопомогою метода forEach
    tweet.tags.forEach(tag => {
        //робимо ключем обєкта аккумулятора тег та встановлюємо значення або 0 або додаємо один
        acc[tag] = (acc[tag] || 0) + 1;
    });
    //повертаємо аккумулятор
    return acc;
    //задаємо стартове значення аккумулятора - пустий обєкт
}, {});

console.log(tagCounts);