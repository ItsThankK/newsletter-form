const form = document.querySelector(".card__form");
const cardWithForm = document.querySelector(".card");
const cardSuccess = document.querySelector(".card-success");
const dismissBtn = document.querySelector(".btn-card-success");
const inputField = document.querySelector("input");
const errorMessage = document.querySelector(".error-state");

inputField.addEventListener("input", () => {
  if (!validator.isEmail(inputField.value)) {
    errorMessage.classList.remove("hidden");
    inputField.classList.add("error");

    errorMessage.textContent = "Valid email required";
    errorMessage.style.color = "red";
  }

  if (validator.isEmail(inputField.value)) {
    inputField.classList.remove("error");

    errorMessage.textContent = "Valid email ✅";
    errorMessage.style.color = "green";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  cardWithForm.classList.toggle("hidden");
  cardSuccess.classList.toggle("hidden");
});

dismissBtn.addEventListener("click", () => {
  cardWithForm.classList.toggle("hidden");
  cardSuccess.classList.toggle("hidden");

  inputField.value = "";
  errorMessage.classList.add("hidden");
  inputField.focus();
});
