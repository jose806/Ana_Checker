import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import eventImage from "./../../Images/event.png";
import style from "./EventCard.module.css";
export default function EventCard() {
  return ( 
    <Paper sx={{ height: "150px", padding: "20px" }}>
      <div className={style.PaperContent}>
        <div>
          <img src={eventImage} alt="Event Icon" className={style.Image}/>
        </div>
        <div className={style.EventInfo}>
          <Typography variant="h5">Food Shelf</Typography>
        </div>
        <div className={style.DateActionDiv}>
          <div className={style.Date}>
            <Typography variant="body1">October 18, 2021</Typography>
          </div>
          <div className={style.Button}>
            <Button
              variant="contained"
              size="small"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
}
