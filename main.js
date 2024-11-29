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

let day;
let month;
let year;

const calculateAge = () => {
  const dateDay = date.getDate();
  const dateMonth = date.getMonth() + 1;
  const dateyear = date.getFullYear();

  let dayValue = dateDay - day;
  let monthValue = dateMonth - month;
  let yearValue = dateyear - year;

  const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);

  dayResult.textContent =
    dayValue < 0 ? monthValue-- && dayValue + prevMonth.getDate() : dayValue;
  monthResult.textContent =
    monthValue < 0 ? yearValue-- && monthValue + 12 : monthValue;
  yearResult.textContent = yearValue;
};

dayInput.addEventListener("input", () => {
  if (!dayInput.value) {
    dayError.textContent = "this field is required";
    dayInput.classList.add("error_state_label");
    dayLabel.classList.add("error_state_msg");
  } else {
    dayError.textContent = "";
    dayInput.classList.remove("error_state_label");
    dayLabel.classList.remove("error_state_msg");
  }

  if (dayInput.value > 31) {
    dayError.classList.remove("hidden");
    dayInput.classList.add("error_state_label");
    dayError.classList.add("error_state_msg");
    dayLabel.classList.add("error_state_msg");
    dayError.textContent = "Must be in the past";
  } else {
    day = dayInput.value;
  }
});

monthInput.addEventListener("input", () => {
  if (!monthInput.value) {
    monthError.textContent = "this field is required";
    monthInput.classList.add("error_state_label");
    monthLabel.classList.add("error_state_msg");
  } else {
    monthError.textContent = "";
    monthInput.classList.remove("error_state_label");
    monthLabel.classList.remove("error_state_msg");
  }

  if (monthInput.value > 12) {
    monthError.classList.remove("hidden");
    monthInput.classList.add("error_state_label");
    monthError.classList.add("error_state_msg");
    monthLabel.classList.add("error_state_msg");
    monthError.textContent = "Must be in the past";
  } else {
    month = monthInput.value;
  }
});

yearInput.addEventListener("input", () => {
  if (!yearInput.value) {
    yearError.textContent = "this field is required";
    yearInput.classList.add("error_state_label");
    yearLabel.classList.add("error_state_msg");
  } else {
    yearError.textContent = "";
    yearInput.classList.remove("error_state_label");
    yearLabel.classList.remove("error_state_msg");
  }

  if (yearInput.value > date.getFullYear()) {
    yearError.classList.remove("hidden");
    yearInput.classList.add("error_state_label");
    yearError.classList.add("error_state_msg");
    yearLabel.classList.add("error_state_msg");
    yearError.textContent = "Must be in the past";
  } else {
    year = yearInput.value;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!year || !month || !day) {
    alert("wikwok");
  } else {
    calculateAge();
  }
});

dayInput.value = "";
monthInput.value = "";
yearInput.value = "";
