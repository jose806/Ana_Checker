import axios from "axios";
import { BaseUrl } from "../config";

async function fetchEvents(uid){

  const promise = axios({
    method: "get",
    url: `${BaseUrl}/getEvents/${uid}`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  const result = await promise;
  return result;
}

export default fetchEvents;