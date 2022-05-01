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

// Accordion Functionality

const featuresArrow = document.querySelector(".arrow-feat-mob")
const dropDownLinksMob = document.querySelector(".features-links-mob");
featuresArrow.addEventListener("click", function(){
    const panel = dropDownLinksMob
    // console.log(panel)
    if (panel.style.maxHeight){
        panel.style.maxHeight = null
    } else{
        panel.style.maxHeight = panel.scrollHeight + "px"
    }
})