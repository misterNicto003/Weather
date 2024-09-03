import "../style/index.css";

import Img from "../img/cloudy.png";

const WeatherImj = document.querySelector(".card-img");

WeatherImj.src = Img;
WeatherImj.classList.add("logoImg");
WeatherImj.append(Img);

