import axios from "axios";

const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_BAYUT_API_KEY,
    },
  });
};
