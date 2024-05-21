const inputs = document.querySelectorAll("input");
const [day, month, year] = inputs;
const spans = document.querySelectorAll(".result");
const [yearSpan, monthSpan, daySpan] = spans;
const button = document.querySelector("button");
const errors = document.querySelectorAll(".error");
const [dayError, monthError, yearError] = [...errors];

const displayAge = () => {
  const dateOfBirth = `${year.value}-${month.value}-${day.value}`;
  console.log(dateOfBirth);
  const age = calculateAge(dateOfBirth);
  yearSpan.textContent = age?.years;
  monthSpan.textContent = age?.months;
  daySpan.textContent = age?.days;
};

const validateDOB = () => {
  const today = new Date();

  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";

  let validDOB = true;

  if (year.value == "" || month.value === "" || day.value === "") {
    errors.forEach((error) => (error.textContent = "This field is required"));
    validDOB = false;
  } else {
    const inputYear = parseInt(year.value, 10);
    const inputMonth = parseInt(month.value, 10);
    const inputDay = parseInt(day.value, 10);

    if (inputMonth < 1 || inputMonth > 12) {
      monthError.textContent = "Must be a valid month";
      validDOB = false;
    }

    const daysInMonth = new Date(inputYear, inputMonth, 0).getDate();
    if (inputDay < 1 || inputDay > daysInMonth) {
      dayError.textContent = "Must be a valid day";
      validDOB = false;
    }

    if (
      validDOB &&
      (inputYear > today.getFullYear() ||
        (inputYear === today.getFullYear() &&
          inputMonth > today.getMonth() + 1) ||
        (inputYear === today.getFullYear() &&
          inputMonth === today.getMonth() + 1 &&
          inputDay > today.getDate()))
    ) {
      if (
        inputDay > today.getDate() &&
        inputMonth === today.getMonth() + 1 &&
        inputYear === today.getFullYear()
      ) {
        dayError.textContent = "Must be a valid day";
      }
      if (
        inputMonth > today.getMonth() + 1 &&
        inputYear === today.getFullYear()
      ) {
        monthError.textContent = "Must be a valid month";
      }
      if (inputYear > today.getFullYear()) {
        yearError.textContent = "Must be in the past";
      }
      validDOB = false;
    }
  }

  if (validDOB) {
    document.querySelector(".date").classList.remove("error");
  } else {
    document.querySelector(".date").classList.add("error");
    yearSpan.textContent = "--";
    monthSpan.textContent = "--";
    daySpan.textContent = "--";
  }

  return validDOB;
};

const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += lastMonth;
  }

  if (months < 0) {
    years--;
    months = months + 12;
  }

  console.log(years, months, days);
  return { years, months, days };
};

button.addEventListener("click", () => {
  if (validateDOB()) {
    console.log(".........");
    displayAge();
  }
});
