import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import userIcon from "./../Images/penguinIcon.png";
import style from "./Panel.module.css";
import { Link } from "react-router-dom";

// To use store
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/index";
import { bindActionCreators } from "redux";

export default function AttendeeCard({ attendee }) {
  const name = `${attendee.firstName} ${attendee.lastName}`;
  const url = `/client/${attendee.attendeeId}`;

  // Getting actions for redux
  const dispatch = useDispatch();
  const { selectAttendee } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className={style.PaperContainter}>
      <Paper sx={{ padding: "30px" }}>
        <Stack alignItems="center">
          <div >
            <img src={userIcon} style={{ width: "80px", height: "80px"}} alt="Icon of Penguin"/>
          </div>
          <div className={style.Info}>
            <Typography variant="body1" fontWeight="bold">
              {name}
            </Typography>
            <Typography>{attendee.location}</Typography>
          </div>
          <Stack direction="row">
            <EventIcon />
            <Typography>
              Attended {attendee.eventsAttendeed.length} times
            </Typography>
          </Stack>
          <Button
            sx={{ marginTop: "20px", width: "250px" }}
            variant="contained"
            component={Link}
            to={url}
            onClick={() => {
              selectAttendee(attendee);
            }}
          >
            View Details
          </Button>
        </Stack>
      </Paper>
    </div>
  );
}
