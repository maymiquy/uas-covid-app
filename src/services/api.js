import axios from "axios";

const fetchGlobalCovidData = async () => {
    try {
        const response = await axios.get("https://covid-fe-2023.vercel.app/api/global.json");
        return response.data;
    } catch (error) {
        console.error("Error fetching global data:", error);
        throw error;
    } finally {
        console.log("Finished fetching global data.");
    }
};

const fetchIndonesiaCovidData = async () => {
    try {
        const response = await axios.get("https://covid-fe-2023.vercel.app/api/indonesia.json");
        return response.data;
    } catch (error) {
        console.error("Error fetching Indonesia data:", error);
        throw error;
    } finally {
        console.log("Finished fetching Indonesia data.");
    }
};

export { fetchGlobalCovidData, fetchIndonesiaCovidData };