import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "554cc584736a45848630ef71577eee08",
  }
});