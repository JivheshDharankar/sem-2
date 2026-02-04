const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", async () => {
  const location = searchInput.value;

  if (!location) {
    alert("Enter a location");
    return;
  }

  const data = await fetchWeather(location);

  if (data) {
    updateUI(data);
  }

  searchInput.value = "";
});

async function fetchWeather(location) {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=" +
    location +
    "&aqi=no";

  const response = await fetch(url);

  if (!response.ok) {
    alert("Location not found");
    return null;
  }

  const jsonData = await response.json();
  return jsonData;
}

function updateUI(data) {
  document.querySelector(".temperature").innerText =
    data.current.temp_c + " °C";

  document.querySelector(".location").innerText =
    data.location.name;

  document.querySelector(".condition").innerText =
    data.current.condition.text;

  document.querySelector(".icon img").src =
    "https:" + data.current.condition.icon;

  const localTime = data.location.localtime.split(" ");
  document.querySelector(".date").innerText = localTime[0];
  document.querySelector(".time").innerText = localTime[1];
}
