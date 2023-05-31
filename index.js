const mobileMenuIcon = document.querySelector('#menuIcon');
const mobileMenu = document.querySelector('#menu');
const mobilMenuCloseIcon = document.querySelector('#menuCloseIcon');
const navSectionTab = document.querySelector('#navSection');
navSectionTab.offsetTop = "0.5%";
const spaceFromTop = navSectionTab.offsetTop;

const featuredJudges = [
  {
      "image": "./media-library/judge1.jpg",
      "name": "Eloghene Otiede",
      "intro": "Software Engineer and founder of Fenales In Tech Initiative",
      "description": "Eloghene is convinced that females are more fluid with programming and is constantly inspiring, mentoring and training women to be exceptional programmers"
  },
  
  {
      "image": "./media-library/judge2.jpg",
      "name": "Sophia Chen",
      "intro": "A passionate Software Engineer",
      "description": "Sophia is a highly skilled software engineer specializing in backend development. She is responsible for designing and implementing robust and scalable software solutions that power a variety of applications."
  },
  
  {
      "image": "./media-library/judge3.jpg",
      "name": "Maya Patel",
      "intro": "An expert and highly skillful Data Scientist",
      "description": "Maya is a talented data scientist who excels in analyzing complex datasets to derive valuable insights. She leverages her expertise in machine learning and statistical modeling to develop predictive algorithms that optimize business processes."
  },
  
  {
      "image": "./media-library/judge4.jpg",
      "name": "Rachel Wang",
      "intro": "A tactful and investigative Cybersecurity Analyst",
      "description": "Eloghene is convinced that females are more fluid with programming and is constantly inspiring, mentoring and training women to be exceptional programmers"
  },
  
  {
      "image": "./media-library/judge5.jpg",
      "name": "Emily Liu",
      "intro": "A skillfull and talented UX Designer",
      "description": "Emily is a creative and detail-oriented UX designer who focuses on crafting intuitive and user-friendly experiences for digital products. She conducts user research, creates wireframes, and collaborates with development teams to deliver visually appealing and user-centric designs."
  },
  
  {
      "image": "./media-library/judge6.jpg",
      "name": "Lisa Johnson",
      "intro": "A result oriented and proactive Product Manager",
      "description": "Lisa is an experienced product manager who oversees the development and launch of innovative tech products. She collaborates with cross-functional teams, conducts market research, defines product roadmaps, and ensures timely delivery of high-quality products that meet customer needs."
  }
]

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

// Judges Section
const lengthOfJudges = featuredJudges.length;
const judgesContainer = document.querySelector('.judgesCardsContainer');


function loadsFeaturedSection(index){

const judgesCards = document.createElement('div');
judgesCards.className = 'judgesCards';
judgesContainer.appendChild(judgesCards);

const patternImg = document.createElement('p');
patternImg.className = 'judgePatternBgs';

const judgeImageContainer = document.createElement('p');
judgeImageContainer.className = 'judgeImages';

const judgeImage = document.createElement('img');
judgeImage.setAttribute('src', featuredJudges[index].image);
judgeImage.setAttribute('width', '150');
judgeImageContainer.appendChild(judgeImage);

const contents = document.createElement('div');
contents.className = 'judgeContents';

const judgeName = document.createElement('p');
judgeName.className = 'judgeNames';
judgeName.textContent = featuredJudges[index].name;

const judgeIntro = document.createElement('p');
judgeIntro.className = 'judgeIntros';
judgeIntro.textContent = featuredJudges[index].intro;

const judgeDivider = document.createElement('hr');
judgeDivider.className = 'judgeDividers';

const judgeDescription = document.createElement('p');
judgeDescription.className = 'judgeDescriptions';
judgeDescription.textContent = featuredJudges[index].description;



contents.innerHTML += judgeName.outerHTML + judgeIntro.outerHTML + judgeDivider.outerHTML + judgeDescription.outerHTML;
judgesCards.innerHTML += patternImg.outerHTML + judgeImageContainer.outerHTML + contents.outerHTML;

}

// Initialize display of featured judges ONLOADs
//tops the display on  mobile only after every 2 cards displayed
let indexCount = 1;
for (let index = (indexCount - 1); index < lengthOfJudges; index++){
  loadsFeaturedSection(index);

  if ((indexCount % 2) === 0 && window.innerWidth < 768) {
    indexCount++;
    break;
  }
  indexCount++;
}

// Loads more judges cards when button with this function is clicked.
// Changes the text and update onclick function after last card displays
function revealFeatures() {
for (let index = (indexCount - 1); index < lengthOfJudges; index++){
  loadsFeaturedSection(index);

  if ((indexCount % 2) === 0) {
    indexCount++;
    break;
  }
  indexCount++;
  
}
if (indexCount >= featuredJudges.length) {
     document.querySelector('.loadMore'). textContent = "VIEW LESS";
     document.querySelector('.loadMore').setAttribute('onclick', 'collapseFeature()');
  }
}


// Deletes all the judges cards, loads the display of cards again
//changes button text and update onclic attriute again to enable expanded display
function collapseFeature() {
let judgeCardsArr = document.getElementsByClassName('judgesCards');
let judgeCardsArray = Array.from(judgeCardsArr); // convert element lists to array
judgeCardsArray.forEach(function(e){
  e.remove();
});

indexCount = 1;
for (index = (indexCount - 1); index < lengthOfJudges; index++){
  loadsFeaturedSection(index);

  if ((indexCount % 2) === 0 && window.innerWidth < 768) {
    indexCount++;
    break;
  }
  indexCount++;
}

document.querySelector('.loadMore'). textContent = "LOAD MORE";
document.querySelector('.loadMore').setAttribute('onclick', 'revealFeatures()');
}

