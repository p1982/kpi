//прослуховувая події на вікні
window.addEventListener('click', (event) => {
    //пошук найбличого значення з місцем 
    const clickedDiv = event.target.closest('#place');
    //перевірка місця події
    const clickedOnPlace = clickedDiv !== null;
    //вивід в консоль співпадіння місця події
    console.log(clickedOnPlace);
});