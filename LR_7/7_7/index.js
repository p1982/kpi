//пошук списку
const categoriesList = document.querySelector('#categories');
//пошук елементів списку
const categoriesItems = categoriesList.querySelectorAll('.item');

//вивід довжини категорії
console.log(`Number of categories: ${categoriesItems.length}`);

//перебір елементів списку
categoriesItems.forEach(item => {
    //пошук заголовку - берем назву розділу
    const categoryName = item.querySelector('h2').textContent;
    //пошук елементів списку в середині
    const categoryItems = item.querySelectorAll('li');
    //вивід категорії в консоль
    console.log(`Category: ${categoryName}`);
    //вивід кількості елементів в консоль
    console.log(`Number of items: ${categoryItems.length}`);
});