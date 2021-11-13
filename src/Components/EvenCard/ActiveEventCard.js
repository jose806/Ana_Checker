import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import eventImage from "./../../Images/activeEvent.png";
import style from "./EventCard.module.css";
import { Link } from "react-router-dom";

// To use store
import { useDispatch } from "react-redux";
import { actionCreators } from "../../store/index";
import { bindActionCreators } from "redux";

export default function ActiveEventCard({ event }) {
  const url = `activeEvents/${event.eventId}`;

  // Getting actions for redux
  const dispatch = useDispatch();
  const { selectEvent } = bindActionCreators(actionCreators, dispatch);
  return (
    <Paper sx={{ height: "150px", padding: "20px", width: "550px" }}>
      <div className={style.PaperContent}>
        <div>
          <img src={eventImage} className={style.Image} alt="Event Icon" />
        </div>
        <div className={style.EventInfo}>
          <Typography variant="h5">Food Shelf</Typography>
        </div>
        <div className={style.DateActionDiv}>
          <div className={style.Date}>
            <Typography variant="body1">
              {event.month} {event.day}, {event.year}
            </Typography>
          </div>
          <div className={style.Button}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                selectEvent(event);
              }}
              component={Link}
              to={url}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
}
