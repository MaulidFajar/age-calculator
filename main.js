const form = document.getElementById("form");

const dayInput = document.querySelector(".day_input");
const monthInput = document.querySelector(".month_input");
const yearInput = document.querySelector(".year_input");

const dayResult = document.querySelector(".day_result");
const monthResult = document.querySelector(".month_result");
const yearResult = document.querySelector(".year_result");

const dayError = document.querySelector(".day_error");
const monthError = document.querySelector(".month_error");
const yearError = document.querySelector(".year_error");

const dayLabel = document.querySelector(".day_label");
const monthLabel = document.querySelector(".month_label");
const yearLabel = document.querySelector(".year_label");

const date = new Date();

let dayValue;
let monthValue;
let yearValue;

const calculateAge = () => {
  const dateDay = date.getDate();
  const dateMonth = date.getMonth() + 1;
  const dateyear = date.getFullYear();

  let calculateDay = dateDay - dayValue;
  let calculateMonth = dateMonth - monthValue;
  let calculateYear = dateyear - yearValue;

  const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);

  dayResult.textContent =
    calculateDay < 0
      ? calculateMonth-- && calculateDay + prevMonth.getDate()
      : calculateDay;
  monthResult.textContent =
    calculateMonth < 0
      ? calculateYear-- && calculateMonth + 12
      : calculateMonth;
  yearResult.textContent = calculateYear;
};

const showError = (element, label, errorClass, errorMsg) => {
  errorClass.textContent = errorMsg;
  element.classList.add("error_state_label");
  label.classList.add("error_state_msg");
  errorClass.classList.add("error_state_msg");
};

const hideError = (element, label, errorClass) => {
  errorClass.textContent = "";
  element.classList.remove("error_state_label");
  label.classList.remove("error_state_msg");
};

const validate = (inputValue, type, input, label, error, max, min) => {
  if (!inputValue) {
    showError(input, label, error, "this field is required");
  } else if (max) {
    showError(input, label, error, "Must be in the past");
  } else if (min) {
    showError(input, label, error, "Must be a valid date");
  } else {
    if (type === "day") {
      dayValue = inputValue;
    } else if (type === "month") {
      monthValue = inputValue;
    } else {
      yearValue = inputValue;
    }
    hideError(input, label, error);
  }
};

dayInput.addEventListener("input", () => {
  const inputValue = dayInput.value;

  validate(
    inputValue,
    "day",
    dayInput,
    dayLabel,
    dayError,
    inputValue > 31,
    inputValue <= 0
  );
});

monthInput.addEventListener("input", () => {
  const inputValue = monthInput.value;

  validate(
    inputValue,
    "month",
    monthInput,
    monthLabel,
    monthError,
    inputValue > 12,
    inputValue === "00"
  );
});

yearInput.addEventListener("input", () => {
  const inputValue = yearInput.value;

  validate(
    inputValue,
    "year",
    yearInput,
    yearLabel,
    yearError,
    inputValue > date.getFullYear()
  );
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!yearValue) {
    showError(yearInput, yearLabel, yearError, "this field is required");
  }
  if (!monthValue) {
    showError(monthInput, monthLabel, monthError, "this field is required");
  }
  if (!dayValue) {
    showError(dayInput, dayLabel, dayError, "this field is required");
  }
  if (yearValue && monthValue && dayValue) {
    calculateAge();
  }
});

dayInput.value = "";
monthInput.value = "";
yearInput.value = "";
