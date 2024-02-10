const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const getDay = document.getElementById("getDay");
const result = document.getElementById("result");

getDay.addEventListener("click", () => {
  let dateObj = new Date(`${date.value} ${month.value} ${year.value}`);
  console.log(dateObj);
  let day = dateObj.toString();
  day = day.slice(0, 3);
  result.innerHTML = day;
});
