const tabs = [...document.querySelectorAll('.tabs-title')];
const tabsContent = document.querySelectorAll('.tabs-content li');
console.log(tabsContent)
tabs.forEach((elem) => elem.addEventListener("click", toggle))

function toggle(e){
    console.log(e.currentTarget);
    e.target.closest('ul').querySelector('.active').classList.remove('active');
    e.target.classList.add('active')
    const index = tabs.findIndex(elem => elem.classList.contains("active"));
    showText(index)
}

function showText(index) {
    console.log(index);
    tabsContent.forEach(elem => elem.setAttribute("hidden", true));
    tabsContent[index].removeAttribute("hidden");
}