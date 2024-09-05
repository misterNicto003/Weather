
export async function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=b2f0200ba5b24644a7773504240309&q=${city}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
    
    console.log(response);
    return response.json();
  }

  