// Slide in nav functionality
const navMobContainer = document.querySelector(".nav-mob-container");
const navSlideContainer = document.querySelector(".nav-slide");
const burger = document.querySelector(".burger-icon");
const navMobCloseIcon = document.querySelector(".nav-slide-close");


const removeNav = () => {
  navMobContainer.classList.remove("nav-mob-container--active");
  navSlideContainer.classList.remove("nav-slide--active");
};

navMobContainer.addEventListener("click", function (e) {
  const clicked = e.target.classList[0] === "nav-mob-container";
  if (clicked) removeNav();
});

burger.addEventListener("click", function (e) {
  navMobContainer.classList.add("nav-mob-container--active");
  navSlideContainer.classList.add("nav-slide--active");
});

navMobCloseIcon.addEventListener("click", function (e) {
  removeNav();
});
