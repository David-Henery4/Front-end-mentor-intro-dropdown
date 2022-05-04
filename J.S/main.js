// Slide in nav functionality

const navMobContainer = document.querySelector(".nav-mob-container");
const navSlideContainer = document.querySelector(".nav-slide");
const burger = document.querySelector(".burger-icon");
const navMobCloseIcon = document.querySelector(".nav-slide-close");



burger.addEventListener("click", function(e){
    navMobContainer.classList.add("nav-mob-container--active");
    navSlideContainer.classList.add("nav-slide--active");
});

navMobCloseIcon.addEventListener("click", function(e){
    navMobContainer.classList.remove("nav-mob-container--active");
    navSlideContainer.classList.remove("nav-slide--active");
})

// const mobNavAni = () => {
    
// }


// Accordion Functionality (Features mob)
const featuresArrow = document.querySelector(".arrow-feat-mob")
const dropDownLinksMob = document.querySelector(".features-links-mob");
featuresArrow.addEventListener("click", function(){
  featuresArrow.classList.toggle("arrow-active");
  const panel = dropDownLinksMob;
  panel.classList.toggle("nav-sub-links-bott");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
})

// Accordion Functionality (Company Mob)
const companyArrow = document.querySelector(".arrow-comp-mob");
const companyDropDownMob = document.querySelector(".company-links-mob");
companyArrow.addEventListener("click", () => {
  companyArrow.classList.toggle("arrow-active");
  if (companyDropDownMob.style.maxHeight){
    companyDropDownMob.style.maxHeight = null
  } else {
    companyDropDownMob.style.maxHeight = companyDropDownMob.scrollHeight + "px"
  }
})

// Desktop Navigation

const desktopArrowFeat = document.querySelector(".arrow-feat")
const desktopArrowComp = document.querySelector(".arrow-comp");

desktopArrowFeat.addEventListener("click", () => {
  desktopArrowFeat.classList.toggle("arrow-active");
});

desktopArrowComp.addEventListener("click", () => {
  desktopArrowComp.classList.toggle("arrow-active");
});