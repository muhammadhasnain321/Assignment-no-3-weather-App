const api_key = "e13fee3ca817d01e47b4f30fb641edb4";
const input = document.getElementById("input"); 
const showdata = document.getElementById("showData")
const search= async() =>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`
    showdata.innerHTML= `<div class="spinner-border align" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`

    const response =await fetch(api);
    const data =await response.json();
    // console.log(data);
    showWeatherData(data)
}

const showWeatherData = (data) => {
    const weatherCard = `
      <div class="weather-card">
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
        <h1>${Math.round(data.main.temp)}°C</h1>
        <h2>${data.weather[0].main}</h2>
        <p>${data.name}, ${data.sys.country}</p>
        <ul class="details">
          <li>Feels like: ${Math.round(data.main.feels_like)}°C</li>
          <li>Humidity: ${data.main.humidity}%</li>
          <li>Wind Speed: ${data.wind.speed} m/s</li>
          <li>Visibility: ${data.visibility / 1000} km</li>
        </ul>
      </div>
    `;
    showdata.innerHTML = weatherCard;
  };

// const showWeatherData =(data) =>{
//     showdata.innerHTML= `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//         <h1>${data.main.temp}</h1>

//         <h2>${data.weather[0].main}</h2>`
// }
// const showWeatherData = (data) => {
//     showdata.innerHTML = `
//       <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
//       <h1>${data.main.temp}°C</h1>
//       <h2>${data.weather[0].main}</h2>
//       <p>${data.name}, ${data.sys.country}</p>
//     `;
//   };