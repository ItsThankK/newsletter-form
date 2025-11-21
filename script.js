const form = document.querySelector(".card__form");
const cardWithForm = document.querySelector(".card");
const cardSuccess = document.querySelector(".card-success");
const dismissBtn = document.querySelector(".btn-card-success");
const inputField = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  cardWithForm.classList.toggle("hidden");
  cardSuccess.classList.toggle("hidden");
});

dismissBtn.addEventListener("click", () => {
  cardWithForm.classList.toggle("hidden");
  cardSuccess.classList.toggle("hidden");

  inputField.value = "";
  inputField.focus();
});
