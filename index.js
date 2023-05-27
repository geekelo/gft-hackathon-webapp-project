const mobileMenuIcon = document.querySelector('#menuIcon');
const mobileMenu = document.querySelector('#menu');
const mobilMenuCloseIcon = document.querySelector('#menuCloseIcon');

// handles mobile dropdown menu display and hide feature
function displayMobilemenu(){
    mobileMenu.classList.toggle('active');
}
mobileMenuIcon.addEventListener('click', displayMobilemenu);
mobilMenuCloseIcon.addEventListener('click', displayMobilemenu);