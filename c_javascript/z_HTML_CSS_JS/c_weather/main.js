const button = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
const container = document.getElementById('container');
const input = document.getElementById('search');

button.addEventListener('click', () => {
  if(button.classList.contains('dark')) {
    // 현재 라이트 모드 -> 다크 모드로 전환
    button.textContent = '라이트모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    container.style.color = 'white';
    input.style.color = 'white';

    // 다크모드를 지정하는 클래스명을 추가
    button.classList.remove('dark');
    button.classList.add('light-mode');
  } else {
    // 현재 다크 모드 -> 라이트 모드로 전환
    button.textContent = '다크모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    button.classList.remove('light-mode');
    button.classList.add('dark');
    button.style = 'none';
    container.style = 'none';
    input.style = 'none';
    
  }
  backgroundImg();
});
const apikey = "b3d2a174bd0bf979992c01994dd21eea";
const lang = "kr";
const searchForm = document.querySelector('.search-contain');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('search').value;
    getWeatherData(city);
});

async function getWeatherData(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const cloudy = data.clouds.all; // 비올 확률
    const temp = data.main.temp; // 현재 기온
    const tempMax = (data.main.temp_max).toFixed(0); // 최고 기온
    const tempMin = (data.main.temp_min).toFixed(0); // 최저 기온
    const humidity = data.main.humidity; // 습도
    const windSpeed = data.wind.speed; // 풍속
    const weatherId = data.weather[0].main // switch문 정보 (Clear, Clouds, Snow, Rain)
    const cityName = city; // 도시 이름
    
    let cityNameEle = document.getElementsByClassName("city-name")[0];
    cityNameEle.textContent = `${cityName}`

    let tempEle = document.getElementsByClassName("temp")[0];
    tempEle.textContent = `${temp}°C`;

    let tempMinMaxEle = document.getElementsByClassName("temp-max-min")[0];
    tempMinMaxEle.textContent = `${tempMin}°C / ${tempMax}°C`;

    let humidityEle = document.getElementsByClassName("humidity")[0];
    humidityEle.textContent = `${humidity}%`;

    let windEle = document.getElementsByClassName("wind")[0];
    windEle.textContent = `${windSpeed}km/h`;

    let cloudyEle = document.getElementsByClassName("cloudy")[0];
    cloudyEle.textContent = `${cloudy}%`; 
    


    backgroundImg(weatherId);
  } catch (error) {
    console.error('Error:', error);
  }
}

function backgroundImg(weatherId) {
  const weather = weatherId;

  switch (weather) {
    case "Clear":
      container.style.backgroundImage = "url('./images/sunny.jpg')";
      document.getElementsByClassName("weather-icon")[0].textContent = "🌤️";
      break;
    case "Clouds":
      container.style.backgroundImage = "url('./images/cloudy.jpg')";
      document.getElementsByClassName("weather-icon")[0].textContent = "☁️";
      break;
    case "Snow":
      container.style.backgroundImage = "url('./images/snow.jpg')";
      document.getElementsByClassName("weather-icon")[0].textContent = "❄️";
      break;
    case "Rain":
      container.style.backgroundImage = "url('./images/rainy.jpg')";
      document.getElementsByClassName("weather-icon")[0].textContent = "🌧️";
      break;
  }
}

// 현재 날짜 표시
const dateYear = new Date().getFullYear(); // 년도
const dateMonth = new Date().getMonth(); // 월
const dateDay = new Date().getDay(); // 요일
const now = document.querySelector('#now')
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const data = new Date()
console.log(data);
now.textContent = `${days[dateDay]}, ${months[dateMonth]} ${dateMonth + 1}, ${dateYear}`


console.log(dateYear);
