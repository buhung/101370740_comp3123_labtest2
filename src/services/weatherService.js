import axios from 'axios';

const apiKey = '9ea5490d743d2885872fb578a6dfdef5';

const weatherService = {
    getForecast: async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching forecast data:", error);
            return null;
        }
    }
};

export default weatherService;