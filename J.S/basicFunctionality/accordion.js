const featuresArrow = document.querySelector(".arrow-feat-mob");
const dropDownLinksMob = document.querySelector(".features-links-mob");
const companyLinkMob = document.querySelector(".company-link-mob");
const featuresLinkMob = document.querySelector(".features-link-mob");
const companyArrow = document.querySelector(".arrow-comp-mob");
const companyDropDownMob = document.querySelector(".company-links-mob");


// Accordion Functionality (Features mob)
const featuresAccordion = () => {
  featuresArrow.classList.toggle("arrow-active");
  const panel = dropDownLinksMob;
  panel.classList.toggle("nav-sub-links-bott");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

featuresArrow.addEventListener("click", () => 
  featuresAccordion()
);
featuresLinkMob.addEventListener("click", () => featuresAccordion()
)

// Accordion Functionality (Company Mob)

const companyAccordion = ()=> {
  companyArrow.classList.toggle("arrow-active");
  if (companyDropDownMob.style.maxHeight) {
    companyDropDownMob.style.maxHeight = null;
  } else {
    companyDropDownMob.style.maxHeight = companyDropDownMob.scrollHeight + "px";
  }
}
companyArrow.addEventListener("click", () =>
  companyAccordion())
companyLinkMob.addEventListener("click", () => companyAccordion())