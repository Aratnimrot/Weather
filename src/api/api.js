const apikey = "ee655a76c913653a1c04f41360cb146c";

const getWeather = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
export default getWeather;
