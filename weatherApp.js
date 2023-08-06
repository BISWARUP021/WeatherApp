const apiKey = "23c01b42642b0e3d211890ff369cbcc6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./Weather app - images/clouds.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./Weather app - images/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./Weather app - images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./Weather app - images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./Weather app - images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./Weather app - images/snow.png";
    }
    document.querySelector(".error").style.display="none"
    // document.querySelector(".weather") = "block"
    // const details = document.querySelector(".details")
    // details.style.display = "block"
    // details.style.width= "100%"
    // details.style.display = "flex"
    // details.style.alignItems = "center"
    // details.style.justifyContent= "space-between"
    // details.style.gap= "60px"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
