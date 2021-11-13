import axios from "axios";
import { BaseUrl } from "../config";
export default (body) => axios({
    method: "post",
    url: `${BaseUrl}/addAttendeeToEvent`,
    data: body,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));