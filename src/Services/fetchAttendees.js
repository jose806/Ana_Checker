import axios from "axios";
import {BaseUrl} from "../config"
async function fetchAttendees(uid) {
  const promise = axios({
    method: "get",
    url: `${BaseUrl}/getAttendees/${uid}`,
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

export default fetchAttendees;
