const apiKey = "cffe2a23c45b0eab91475cd2885809cd";

function getCityName() {
   const cityName = document.getElementById("cityInput").value;
   const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=cffe2a23c45b0eab91475cd2885809cd&units=metric";
   fetch(weatherUrl)
   .then((response)=>response.json())
   .then(data => setValues(data))
   .catch(error => console.log(error));
}

function setValues(data) {
   
   const sunRiseTime = new Date(data.sys.sunrise).toISOString().slice(11, -8);//°
   const sunSetTime = new Date(data.sys.sunset).toISOString().slice(11, -8);

   document.getElementById("pressure").innerHTML = data.main.pressure;
   document.getElementById("humidity").innerHTML = data.main.humidity;
   document.getElementById("wind-speed").innerHTML = data.wind.speed;
   document.getElementById("sun-rise").innerHTML = sunRiseTime;
   document.getElementById("sun-set").innerHTML = sunSetTime; 

   document.getElementById("city-name").innerHTML = data.name;
   // document.getElementById("lon").innerHTML = data.coord.lon + "N";
   // document.getElementById("lat").innerHTML = data.coord.lat + "E";

   //document.getElementById("description").innerHTML = data.weather[0].description; 
   console.log(data.main.temp);
   document.getElementById("temp").innerHTML = data.main.temp + "°C";
   document.getElementById("temp-min").innerHTML = data.main.temp_min + "°C";
   document.getElementById("temp-max").innerHTML = data.main.temp_max + "°C";

   const iconId = data.weather[0].icon;
   const iconUrl = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
   document.getElementById("weather-icon").innerHTML = "<img src="+ iconUrl + " alt= \"weather-icon\">";
}

