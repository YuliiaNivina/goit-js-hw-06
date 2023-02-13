const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const inputDataToNumber = Number(inputEl.dataset.length);

  if (event.currentTarget.value.length !== inputDataToNumber) {
    inputEl.classList.add("invalid"), inputEl.classList.remove("valid");
  } else inputEl.classList.remove("invalid"), inputEl.classList.add("valid");
}
