const axios = require('axios');

const API_KEY = "10e0dbf25d22eb5889d250313b6f5858";

async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=vi`;

        const response = await axios.get(url);

        console.log("===== THỜI TIẾT HIỆN TẠI =====");
        console.log("Thành phố:", response.data.name);
        console.log("Nhiệt độ:", response.data.main.temp + "°C");
        console.log("Độ ẩm:", response.data.main.humidity + "%");
        console.log("Thời tiết:", response.data.weather[0].description);

    } catch (err) {
        console.error("Lỗi khi gọi API:", err.response?.data || err.message);
    }
}

getWeather("Hanoi");
