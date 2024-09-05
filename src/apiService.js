export async function getWeather(city) {
    const apiKey = "b2f0200ba5b24644a7773504240309";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
    
    return response.json();
  }