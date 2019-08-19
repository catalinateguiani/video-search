import axios from "axios";

const KEY = "AIzaSyAGzE6mmT0BHw22xSoNMkrCLGzgmGA2-Pc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
