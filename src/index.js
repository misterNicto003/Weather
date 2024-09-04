import "../style/index.css";
import cloudyImage from "../img/cloudy.png";

const header = document.querySelector(".header");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

function addCard({name, country, temp, condition}) {
  const html = `
    <div class="card">
    <h2 class="card-city">${name} <span>${country}</span></h2>
   
    <div class="card-weather">
    <div class="card-value">${temp}<sup>°c</sup></div>
    <img class="card-img" src="${cloudyImage}" alt="Weather Icon"
    </div>
    </div>
    <div class="card-description"> ${condition}</div>
    `;
  header.insertAdjacentHTML("afterend", html);
}

function showError(messageError) {
  const html = `
    <div class="card">${messageError}</div>`;

  header.insertAdjacentHTML("afterend", html);
}
function removeCard() {
  const prevCard = document.querySelector(".card");
  if (prevCard) prevCard.remove();
}

async function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=b2f0200ba5b24644a7773504240309&q=${city}`;
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
  return data;
}

form.onsubmit = async function (e) {
  e.preventDefault();
  let city = input.value.trim();

  const data = await getWeather(city);

  if (data.error) {
    removeCard();
    showError(data.error.message);
  } else {
    removeCard();

    const weatherData = {
      name: data.location.name,
      country: data.location.country,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
    };
    addCard(weatherData);
  }
};
