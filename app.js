let inputbox=document.querySelector('.inputbox');
let searchbutton=document.querySelector('.searchbutton');
let temperature=document.querySelector(".display_temperature");
let Input_city=document.querySelector(".city_name");
let windspeed=document.querySelector('.display_windspeed');
let humidity=document.querySelector('.display_humidity');
let clouds=document.querySelector('.display_clouds');

async function checkWeather(city){
    const api_key="eb56672824594b1f390e5dead434b281";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`).then(response=>response.json());
    // console.log(weather_data);
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}<span>&#8451;</span>`;

    Input_city.innerHTML=inputbox.value;
    clouds.innerHTML=`${weather_data.main.humidity}%`;
    console.log(weather_data);
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windspeed.innerHTML=weather_data.wind.speed+"km/h";
    inputbox.value="";
}

searchbutton.addEventListener('click',()=>{
    checkWeather(inputbox.value);
})

inputbox.addEventListener('keydown',(event)=>{
    if(event.code=='Enter'){
        checkWeather(inputbox.value);
    }
})