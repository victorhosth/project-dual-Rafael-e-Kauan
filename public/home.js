//sliders

const sliders = document.querySelector(".sliders");
const slidersWidth = sliders.childElementCount;

sliders.style.width = `${slidersWidth * 100}vw`;

const modals = document.querySelector("#modals");
const popupLogin = document.querySelector(".modal_item.login");
const popupRegister = document.querySelector(".modal_item.register");

const buttonLogin = document.querySelector(".btn_login");
const buttonRegister = document.querySelector(".btn_register");

buttonLogin.addEventListener("click", function () {
  openModal(popupLogin);
});

buttonRegister.addEventListener("click", function () {
  openModal(popupRegister);
});

function openModal(popup) {
  modals.classList.remove("none");
  popup.classList.remove("none");
}

const buttonCloseModals = document.querySelectorAll(".button_close_popup");

buttonCloseModals.forEach((element) => {
  element.addEventListener("click", closeModals);
});

function closeModals() {
  modals.classList.add("none");
  popupLogin.classList.add("none");
  popupRegister.classList.add("none");
}

modals.addEventListener("mousedown", function (e) {
  if (e.target === modals) {
    closeModals();
  }
});