const menu= document.querySelector('#mobile-menu');
const menulinks=document.querySelector('.navbar-menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})