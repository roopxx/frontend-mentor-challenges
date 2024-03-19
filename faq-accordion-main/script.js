const questions = document.querySelectorAll(".faq");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const icon = question.lastElementChild.firstElementChild;

    if (icon.getAttribute("src") === "./assets/images/icon-plus.svg") {
      icon.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }

    question.nextElementSibling.classList.toggle("hide");
  });
});
