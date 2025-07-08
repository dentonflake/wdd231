const API_KEY = 'b17ef0b0c2b9b624827b0dfde506eb08';

const loadWeather = async () => {

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

const displayWeather = async () => {

    const weather = await loadWeather();

    console.log(weather);
}

displayWeather();