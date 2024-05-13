const ratingButtons = document.querySelectorAll(".rating-score");
const submitButton = document.querySelector(".submit");

function selectRating(element) {
  let rating = element.innerHTML;
  document.querySelector(".rating").innerHTML = rating;
  ratingButtons.forEach((button) => {
    button.classList.remove("active", "hover");
  });
  element.classList.add("active");
}

function submitRating() {
  document.querySelector(".rating-view").classList.toggle("hidden");
  document.querySelector(".thankyou-view").classList.toggle("hidden");
}

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => selectRating(button));
});

submitButton.addEventListener("click", submitRating);
