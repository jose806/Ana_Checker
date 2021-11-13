import axios from "axios";
import { BaseUrl } from "../config";

export default (eventId) =>
  axios({
    method: "get",
    url: `${BaseUrl}/getSingleEvent/${eventId}`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
