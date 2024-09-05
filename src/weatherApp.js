import { getWeather } from "./apiService";
import { conditions } from "./condition";
import cloudyImage from "../img/cloudy.png";
import { removeCard, showError, addCard } from "./utils";

export default class WeatherApp {
  constructor() {
    this.header = document.querySelector(".header");
    this.form = document.querySelector(".form");
    this.input = document.querySelector(".input");

    this.form.onsubmit = (e) => this.handleFormSubmit(e);
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const city = this.input.value.trim();

    try {
      const data = await getWeather(city);
      const { location, current, error } = data;

      if (error) {
        removeCard();
        showError(this.header, error.message);
      } else {
        removeCard();

        const { name, country } = location;
        const { temp_c, condition, is_day } = current;
        const { code } = condition;

        const info = conditions.find((el) => el.code === code);
        const conditionText = is_day
          ? info.languages[23]["day_text"]
          : info.languages[23]["night_text"];

        addCard(this.header, {
          name,
          country,
          temp_c,
          conditionText,
          image: cloudyImage,
        });

        this.input.value = "";
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      showError(this.header, "Unable to retrieve weather data.");
    }
  }
}
