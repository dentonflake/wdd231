const weatherTemperature = document.getElementById('weather-temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherForecast = document.getElementById('weather-forecast');

const API_KEY = 'b17ef0b0c2b9b624827b0dfde506eb08';

const loadCurrentWeather = async () => {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=38.7359&lon=-85.3799&units=imperial&appid=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();

    } catch (error) {

        console.error('Error loading data:', error);
    }
}

const loadForecast = async () => {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=38.7359&lon=-85.3799&units=imperial&appid=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();

    } catch (error) {

        console.error('Error loading data:', error);
    }
}

const displayWeather = async () => {

    const weather = await loadCurrentWeather();

    const temperature = weather.main.temp;
    const description = weather.weather[0].description

    weatherTemperature.textContent = Math.round(temperature);
    weatherDescription.textContent = description.charAt(0).toUpperCase() + description.slice(1);

    const forecast = await loadForecast();

    forecast.list

        .filter(report => report.dt_txt.includes("12:00:00"))

        .map(report => ({
            day: new Date(report.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
            temp: Math.round(report.main.temp_max)
        }))

        .slice(0, 3)
        
        .forEach(report => {
            console.log(report)

            const day = document.createElement('div')

            const temp = document.createElement('p')
            temp.textContent = `${report.temp}°F`
            temp.className = 'weather__temp';

            const date = document.createElement('p')
            date.textContent = `${report.day}`

            day.appendChild(temp)
            day.appendChild(date)
            weatherForecast.appendChild(day)
        })
}

displayWeather();