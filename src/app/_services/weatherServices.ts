import axios from "axios"

const weatherServices = () => {
    const API_KEY = "00f22cb6700858c4d1f6f07d70fa026e";
    return {
        getWeather : async (latitude : number, longitude : number) => {
            try {
                const response =  await axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);                                    
                return response.data;
            } catch (error) {
                return error;
            }
        }
    }
}

export default weatherServices;