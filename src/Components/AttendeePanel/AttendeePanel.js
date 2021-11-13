import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AttendeeCard from "../AttendeeCard";
import AddIcon from "@mui/icons-material/Add";
import style from "./AttendeePanel.module.css";
import {Link} from 'react-router-dom'
export default function AttendeePanel() {
  // Gets the state of attendees
  const attendees = useSelector((state) => {
    return state.attendees;
  });
  // Redo
  const organizeCards = () => {
    const organizedCards = [];
    let rowOne = [];
    let rowTwo = [];
    let rowThree = [];
    attendees.map((client, index) => {
      if (index % 3 === 0) {
        return rowOne.push(<AttendeeCard attendee={client} key={index} />);
      }
      if (index % 3 === 1) {
        return rowTwo.push(<AttendeeCard attendee={client} key={index} />);
      }
      else{
        return rowThree.push(<AttendeeCard attendee={client} key={index} />);
      }
    });
    organizedCards.push(<Stack spacing={2} key={0}>{rowOne}</Stack>);
    organizedCards.push(<Stack spacing={2} key={1}>{rowTwo}</Stack>);
    organizedCards.push(<Stack spacing={2} key={2}>{rowThree}</Stack>);
    const back = (
      <Stack spacing={2} direction="row">
        {organizedCards}
      </Stack>
    );
    return back;
  };
  return (
    <div>
      <div className={style.Container}>
        <div className={style.TitleRow}>
          <Typography variant="h3">Client</Typography>
          <div className={style.Button}>
            <Button variant="contained" size="small" component={Link} to="/addAttendee">
              Add a client
              <AddIcon />
            </Button>
          </div>
        </div>
        {organizeCards()}
      </div>
    </div>
  );
}
