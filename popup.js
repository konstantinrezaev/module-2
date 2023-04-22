const POPUP_OPENED_CLASSNAME = "popupOpen";
const BODY_FIXED_CLASSNAME = "bodyFixed";

const bodyNode = document.querySelector("body");
const popupNode = document.querySelector(".jsPopup");
const btnOpenNode = document.querySelector(".jsBtn");
const popupContentNode = document.querySelector(".jsPopupContent");
const btnCloseNode = document.querySelector(".jsPopupCloseBtn");

btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);

popupNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
});

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
