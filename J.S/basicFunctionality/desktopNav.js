// Desktop Navigation
const desktopArrowFeat = document.querySelector(".arrow-feat");
const desktopArrowComp = document.querySelector(".arrow-comp");
const featDropDesk = document.querySelector(".nav__dropdown--feat");
const compDropDesk = document.querySelector(".nav__dropdown--comp");
const featuresLink = document.querySelector(".features-link");
const companyLink = document.querySelector(".company-link");

const toggleFeatDropdown = () => {
  desktopArrowFeat.classList.toggle("arrow-active");
  featDropDesk.classList.toggle("nav-dropdown-active");
};

const toggleCompanyDropdown = () => {
  desktopArrowComp.classList.toggle("arrow-active");
  compDropDesk.classList.toggle("nav-dropdown-active");
};

desktopArrowFeat.addEventListener("click", () => {
  toggleFeatDropdown();
});
featuresLink.addEventListener("click", () => {
  toggleFeatDropdown();
});

desktopArrowComp.addEventListener("click", () => {
  toggleCompanyDropdown();
});
companyLink.addEventListener("click", () => {
  toggleCompanyDropdown();
});
