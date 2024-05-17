const subscribeButton = document.querySelector(".subscribe-button");
const emailInput = document.querySelector("#email");
const emailSpan = document.querySelector(".email");
const dismissButton = document.querySelector(".dismiss-button");
const errorMessage = document.querySelector(".error");

function showSuccessSubscribed(e) {
  const email = emailInput.value;
  if (email === "" || !emailInput.checkValidity()) {
    errorMessage.textContent = "Valid email required";
    return;
  }

  emailSpan.textContent = email;
  document.querySelector(".sign-up").classList.add("hide");
  document.querySelector(".success-message").classList.remove("hide");
}

function dismissMessage() {
  emailInput.value = "";
  errorMessage.textContent = "";
  document.querySelector(".sign-up").classList.remove("hide");
  document.querySelector(".success-message").classList.add("hide");
}

subscribeButton.addEventListener("click", showSuccessSubscribed);

dismissButton.addEventListener("click", dismissMessage);
