const BURGER_OPENED_CLASSNAME = "burgerOpen";
const BURGER_BTN_OPENED_CLASSNAME = "burgerBtnOpen";
const BODY_FIXED_CLASSNAME_2 = "bodyFixed";

const bodyNode2 = document.querySelector("body");
const burgerNode = document.querySelector(".jsBurger");
const burgerBtnNode = document.querySelector(".jsBurgerBtn");
const burgerContentNode = document.querySelector(".jsBurgerContent");

burgerBtnNode.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event.composedPath().includes(burgerBtnNode);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
  burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
