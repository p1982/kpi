//Шукаємо батьківський елемент в верхнім меню
const tabs = document.querySelector('.tabs');
//вішаємо прослуховувач події на батьківський елемент
tabs.addEventListener('click', (e) => {
    //створюємо змінну - де відбулася подія
    const target = e.target
    //беремо датаатрібут фільтр
    const data = target.dataset.filter
    //від елемента на якому відбулася подія йдемо в гору до батьківського елемента
    const parent = target.closest('ul')
    //шукаємо в середині елемент з класом актив
    const active = parent.querySelector('.active')
    //берем атрібут фільтр у елемента у якого треба видалити
    const dataActive = active.dataset.filter
    //шукаємо актив по ідентифікатору нижній блок
    const dataAct = document.querySelector(dataActive);
    //шукаємо елемент для додавання
    //видаляємо у таба актив
    active.classList.remove('active')
    //видаляємо класс актив у нижнього елемента
    dataAct.classList.remove('active')
    //даємо актів елементу на якому відбулася подія
    target.classList.add('active')

    const elem = document.querySelector(data);
    //додаємо класс актив у нижнього елемента
    elem.classList.add('active')
    addList(data)
})
addList("#lab1")
function addList(data){
//Шукаємо батьківський елемент в боковом меню
const aside = document.querySelector(data);
console.log(aside);
//вішаємо прослуховувач події на батьківський елемент бокової панелі
aside.addEventListener('click', (e) => {
    //створюємо змінну - де відбулася подія
    const target = e.target
    //беремо датаатрібут таб
    const data = target.dataset.tab
    //якщо подія на елементі без датаатрібута повертаємо
    if (!data) {
        return
    } 
     //від елемента на якому відбулася подія йдемо в гору до батьківського елемента
    const parent = target.closest('div')
    //видаляємо класс актив у нижнього елемента
    const elem = parent.querySelector(data)
    //шукаємо в середині елемент з класом актив
    const sectionActive = parent.querySelector('.section.active')
    //шукаємо в середині елемент з класом актив
    const activeElem = parent.querySelector('.active')
    activeElem.classList.remove('active')
    //видаляємо класс актив у нижнього елемента
    sectionActive.classList.remove('active')
    //даємо актів елементу на якому відбулася подія
    target.classList.add('active')
    //додаємо класс актив у нижнього елемента
    elem.classList.add('active')
})
}
