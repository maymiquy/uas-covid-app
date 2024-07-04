import axios from "axios";

const fetchGlobalCovidData = async () => {
    const response = await axios.get("https://covid-fe-2023.vercel.app/api/global.json");
    return response.data;
};

const fetchIndonesiaCovidData = async () => {
    const response = await axios.get("https://covid-fe-2023.vercel.app/api/indonesia.json");
    return response.data;
};

export { fetchGlobalCovidData, fetchIndonesiaCovidData };