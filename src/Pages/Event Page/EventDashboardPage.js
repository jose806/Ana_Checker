import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Paper, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import style from "./EventDashboard.module.css";
import { getMonthName } from "./config";
import { BaseUrl } from "../../config";
import axios from "axios";
import ActiveEventContainer from "../../Components/ActiveEvent/ActiveEventContainer";

export default function EventDashboardPage() {
  //Geting state from redux
  const events = useSelector((state) => {
    return state.events;
  });
  //Geting state from redux
  const loggedInUserState = useSelector((state) => {
    return state.user;
  });

  function postEvent(addEvent) {
    return axios({
      method: "post",
      url: `${BaseUrl}/addEvent`,
      data: addEvent,
    })
      .then((response) => {
        console.log("Succeess", response.data.message);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  const addEventHandler = (event) => {
    event.preventDefault();
    const fullDate = new Date();
    const day = fullDate.getDate();
    const month = getMonthName(fullDate.getMonth());
    const year = fullDate.getFullYear();

    const addEvent = {
      name: "Food Shelf",
      day: day,
      month: month,
      year: year,
      active: true,
      attended: [],
      organizerId: loggedInUserState.uid,
    };

    postEvent(addEvent);
    console.log(addEvent);
  };
  return events.length === 0 ? (
    <div>
      <div className={style.Button}>
        <Button variant="contained" onClick={addEventHandler}>
          Add Event
          <AddIcon />
        </Button>
      </div>
      <Paper sx={{ height: "30px", padding: "50px", textAlign: "center" }}>
        <Typography>No Events..</Typography>
      </Paper>
    </div>
  ) : (
    <div>
      <div className={style.Button}>
        <Button variant="contained" onClick={addEventHandler}>
          Add Event
          <AddIcon />
        </Button>
      </div>
      <div style={{width:"1000px"}}>
      <ActiveEventContainer />
      </div>
    </div>
  );
}
