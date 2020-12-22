const getJSON = require("../utils/api");

const grabWeather = async () => {
  const { main, name, weather } = await getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=${process.env.WEATHER_TOKEN}&units=imperial`
  );

  return { temperature: main.temp, weather: weather[0].main, city: name };
};

module.exports = grabWeather;
