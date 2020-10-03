import axios from "axios";

const KEY = "AIzaSyCDsaH0IhGdVOiCFsxU2mc2dOTrWxTt-hc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
