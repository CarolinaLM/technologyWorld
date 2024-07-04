// Menu 
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.navbar_menu-icon');
    const navbarItemsRight = document.querySelector('.navbar_itens-right');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        if (navbarItemsRight.classList.contains('active')) {
            navbarItemsRight.style.maxHeight = null;
            navbarItemsRight.classList.remove('active');
        } else {
            navbarItemsRight.style.maxHeight = navbarItemsRight.scrollHeight + "px";
            navbarItemsRight.classList.add('active');
        }
    });
});


// Animação 


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.animation')

elements.forEach((element) => myObserver.observe(element)) 

