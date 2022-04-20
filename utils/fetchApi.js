import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
// export baseUrl, b/c you're using for other files outside of this one

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_BAYUT_API_KEY,
    },
  });

  return data;
};
