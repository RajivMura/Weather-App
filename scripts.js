
document.getElementById('get-weather').addEventListener('click', function () {
    const cityName = document.getElementById('city-name').value.trim();
    if (!cityName) {
        alert('Please enter a city name!');
        return;
    }

    



    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
           // console.log(this.responseText);
            let weatherDetails = this.responseText;
            console.log(weatherDetails)

            //Parse the response (if it's a string)
            const data = JSON.parse(weatherDetails);

            // Access the required fields
            const cityName = data.name; // Delhi
            const temperature = (data.main.temp - 273.15).toFixed(1); // Convert Kelvin to Celsius
            const humidity = data.main.humidity; // 30
            const windSpeed = data.wind.speed; // 5.66
            const weatherDescription = data.weather[0].description; // haze
            const weatherIcon = data.weather[0].icon; // 50d

            // Update the DOM (example)
            
            document.querySelector('.city').textContent = cityName;
            document.querySelector('.temp').textContent = `${temperature}°C`;
            document.querySelector('.humidity').textContent = `${humidity}%`;
            document.querySelector('.wind').textContent = ` ${windSpeed} km/h`;
            document.querySelector('.weather-icon').src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

            
        }
    });

    xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${encodeURIComponent(cityName)}`);
    xhr.setRequestHeader('x-rapidapi-key', '7b3d70403fmshedddc915c1317efp1b5cd0jsnb21669394820');
    xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

    xhr.send(null);
});






