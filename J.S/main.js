// Slide in nav functionality

const navMobContainer = document.querySelector(".nav-mob-container");
const navSlideContainer = document.querySelector(".nav-slide");
const burger = document.querySelector(".burger-icon");
const navMobCloseIcon = document.querySelector(".nav-slide-close");

const removeNav = () => {
  navMobContainer.classList.remove("nav-mob-container--active");
  navSlideContainer.classList.remove("nav-slide--active");
}

navMobContainer.addEventListener("click", function(e){
const clicked = e.target.classList[0] === "nav-mob-container"
  if (clicked) removeNav()
})

burger.addEventListener("click", function(e){
    navMobContainer.classList.add("nav-mob-container--active");
    navSlideContainer.classList.add("nav-slide--active");
});

navMobCloseIcon.addEventListener("click", function(e){
  removeNav()
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
const featDropDesk = document.querySelector(".nav__dropdown--feat");
const compDropDesk = document.querySelector(".nav__dropdown--comp");

desktopArrowFeat.addEventListener("click", () => {
  desktopArrowFeat.classList.toggle("arrow-active");
  featDropDesk.classList.toggle("nav-dropdown-active");
});

desktopArrowComp.addEventListener("click", () => {
  desktopArrowComp.classList.toggle("arrow-active");
  compDropDesk.classList.toggle("nav-dropdown-active");
});

