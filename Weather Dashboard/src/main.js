import "./style.css";

const container = document.querySelector("#container");
const input = document.querySelector("#inp");
function GetWeather(city) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3d8c14fdb6474aeab0734249262109&q=${city}&days=10`,
  )
    .then((rawdata) => rawdata.json())
    .then((data) => {
      // console.log(data);
      if (data.error) {
        const error = document.querySelector("#error");
        error.textContent = "City not found!";
        setTimeout(() => {
          error.textContent = "";
        }, 1000);
        return;
      }
      container.innerHTML = "";
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      data.forecast.forecastday.forEach((day) => {
        console.log(day);
        const foredate = new Date(day.date);
        const dayName = days[foredate.getDay()];
        const DayMonthName = `${foredate.getDate()} ${months[foredate.getMonth()]}`;

        container.innerHTML += `
<div
  class="flex flex-col items-center bg-slate-800 px-2 py-1 border rounded-2xl"
>
  <h1>${dayName}</h1>
  <p class="text-gray-400">${DayMonthName}</p>
  <img src="${day.day.condition.icon}" alt="" />
  <h2 class="max">${day.day.maxtemp_c}\u00B0C</h2>
  <p class="min text-gray-400"> ${day.day.mintemp_c}\u00B0C</p>
</div>
`;
      });

      const date = new Date(data.location.localtime);
      const Formatteddate = `${date.getDate()},${months[date.getMonth()]},${date.getFullYear()}`;
      const times = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

      const temp = document.querySelector("#temp");
      temp.textContent = `${data.current.temp_c}\u00B0C`;

      const condition = document.querySelector("#condition");
      condition.textContent = `${data.current.condition.text}`;

      const img = document.querySelector("#icon");
      img.src = data.current.condition.icon;

      const location = document.querySelector("#location");
      location.textContent = `${data.location.name}, ${data.location.country}`;

      const localtime = document.querySelector("#time");
      time.textContent = `${Formatteddate}, ${times}`;

      const humidity = document.querySelector("#humidity");
      humidity.textContent = data.current.humidity;

      const wind = document.querySelector("#wind");
      wind.textContent = `${data.current.wind_kph} km/h`;

      const feel = document.querySelector("#feel");
      feel.textContent = `${data.current.feelslike_c}\u00B0C`;

      const pressure = document.querySelector("#pressure");
      pressure.textContent = `${data.current.pressure_mb} hpa`;

      const viss = document.querySelector("#viss");
      viss.textContent = `${data.current.vis_km} km`;

      const uv = document.querySelector("#uv");
      uv.textContent = `${data.current.uv}`;
    })
    .catch((err) => console.log(err));

  const search = document.querySelector("#Search");

  search.addEventListener("click", function () {
    const city = input.value;
    GetWeather(city);
  });
  input.value = "";
}
GetWeather("Ranchi");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    GetWeather(input.value);
  }
});
