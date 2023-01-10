const input = document.querySelector("#title");
const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {

  if (!input.value) {
    e.preventDefault();
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("alert-danger")
    errorMessage.classList.add("alert")
    errorMessage.textContent = `O campo acima não pode ficar vazio.`;
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
    return;
  }
});




