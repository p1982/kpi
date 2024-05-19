//пошук форми
const loginForm = document.querySelector('.login-form');

//прослуховувач події форми підтвердження
loginForm.addEventListener('submit', e => {
    //забарона поведінки браузера за замовчуванням
    e.preventDefault();

    //пошук інпутів в формі - повертається нодліст
    const formInputs = loginForm.querySelectorAll('input');
     //перетворення на обєкт з нодліста за допомогою редус
    const formData = [...formInputs].reduce((acc,cur) =>{
        acc[cur.name] = (cur.value).trim();
        return acc
    }, {});
    //перевірка наявності данних
    if (!formData.email || !formData.password) {
        //вивід помилки
        alert('All form fields must be filled in');
        return;
    }
    //вивід данних форми в консоль
    console.log(formData);
    //очищення інпутів форми
    e.target.reset();
});