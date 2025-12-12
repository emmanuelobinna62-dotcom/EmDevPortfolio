const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-container');
const icon = hamburger.querySelector('i');
const menulink = document.querySelectorAll('.menu-link')

function toggleMenu(){
  menu.classList.toggle('active');

  icon.classList.toggle ('fa-bars');
  icon.classList.toggle ('fa-xmark');
  
}

function closeMenu() {
  menu.classList.remove("active");
    icon.classList.toggle ('fa-bars');
  icon.classList.toggle ('fa-xmark')
}



hamburger.addEventListener('click',toggleMenu);
menulink .forEach (link => {
  link.addEventListener ('click',closeMenu);
})