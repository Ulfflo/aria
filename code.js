let lastOpenedButton = "";

function focusLastOpenedButton() {
  if (lastOpenedButton) {
    lastOpenedButton.focus();
  }
}

function manageFocusWithin(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.setAttribute("aria-hidden", "false");

  element.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    popupWindow.style.display = "none";
    popupWindow2.style.display = "none";
    focusLastOpenedButton();
  }
});

const popupLink = document.getElementById("button");
const popupWindow = document.getElementById("accessibleModal");
const closeButton = document.getElementById("closeModalBtn");

popupLink.addEventListener("click", () => {
  popupWindow.style.display = "block";
  closeButton.focus(); 
  manageFocusWithin(popupWindow);
});

closeButton.addEventListener("click", () => {
  popupWindow.style.display = "none";
  popupWindow.setAttribute("aria-hidden", "true");
  focusLastOpenedButton();
});

popupLink.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow.style.display = "block";
  lastOpenedButton = popupLink;
  closeButton.focus();
  manageFocusWithin(popupWindow);
});

const popupLink2 = document.getElementById("button2");
const popupWindow2 = document.getElementById("accessibleDialog");
const closeButton2 = document.getElementById("closeDialogBtn");

popupLink2.addEventListener("click", () => {
  popupWindow2.style.display = "block";
  closeButton2.focus(); 
  manageFocusWithin(popupWindow2);
});

closeButton2.addEventListener("click", () => {
  popupWindow2.style.display = "none";
  popupWindow2.setAttribute("aria-hidden", "true");
  focusLastOpenedButton();
});

popupLink2.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow2.style.display = "block";
  lastOpenedButton = popupLink2;
  closeButton2.focus(); 
  manageFocusWithin(popupWindow2);
});

const menuButton = document.querySelector("#menuButton");
const menuContent = document.querySelector("#menuContent");

menuButton.addEventListener("click", () => {
  menuContent.toggleAttribute("hidden");
});

