const mobileMenuIcon = document.querySelector('#menuIcon');
const mobileMenu = document.querySelector('#menu');
const mobilMenuCloseIcon = document.querySelector('#menuCloseIcon');
const navSectionTab = document.querySelector('#navSection');
navSectionTab.offsetTop = "0.5%";
const spaceFromTop = navSectionTab.offsetTop;

// handles mobile dropdown menu display and hide feature
function displayMobilemenu(){
    mobileMenu.classList.toggle('active');
}
mobileMenuIcon.addEventListener('click', displayMobilemenu);
mobilMenuCloseIcon.addEventListener('click', displayMobilemenu);

//
function fixMenuBar(){
    if (window.scrollY  >= spaceFromTop){
        navSectionTab.classList.add('navSectionFix');
    }
    else {
        navSectionTab.classList.remove('navSectionFix');
    }
}
window.addEventListener('scroll', fixMenuBar);

