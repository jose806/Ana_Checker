import { Autocomplete, Grid, TextField } from "@mui/material";
import { Redirect } from "react-router-dom";
import React from "react";
import ActiveEventFullCard from "../../Components/FullEventCards/ActiveEventFullCard";
import SignedInAttendees from "../../Components/FullEventCards/SignedInAttendees";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../store/index";
import { bindActionCreators } from "redux";
import axios from "axios";
import { BaseUrl } from "../../config";
import fetchSingleEvent from "../../Services/fetchSingleEvent";
import postAddAttendeeaToEvent from "../../Services/postAddAttendeeaToEvent";
export default function EventDetailsPage() {
  // Gets the state of attendees
  const attendees = useSelector((state) => {
    return state.attendees;
  });

  const selectedEvent = useSelector((state) => {
    return state.selectedEvent;
  });

  const dispatch = useDispatch();
  const { selectEvent } = bindActionCreators(actionCreators, dispatch);
  if (selectedEvent === null) {
    return <Redirect to="/" />;
  }
  console.log("------Selected Event", selectEvent);
  console.log("attendee", attendees);
  const list =
    attendees &&
    attendees.map((client) => {
      const label = `${client.firstName} ${client.lastName} ${client.phone}`;
      const id = client.attendeeId;
      return { name: label, attendeeId: id };
    });
  console.log("List", list);

  // It updates the page by fetcing this event
  // from database to have most current data
  // then adds it to the select reducer
  async function updatePage() {
    console.log("in update");
    const result = await fetchSingleEvent(selectedEvent.eventId);
    selectEvent(result);
    console.log("------Results-----", result);
  }
  function postAttendeeToEvent(body) {
    const promise = postAddAttendeeaToEvent(body);
    promise.then((response) => {
      console.log(response);
      updatePage();
    });
  }
  return (
    <div>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={4}>
          <ActiveEventFullCard />
        </Grid>
        <Grid item xs={8}>
          <Autocomplete
            sx={{ marginBottom: "50px" }}
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            options={list}
            onChange={(e, newValue, id) => {
              let body;
              newValue
                ? (body = {
                    attendeeId: newValue.attendeeId,
                    eventId: selectedEvent.eventId,
                  })
                : (body = null);
              postAttendeeToEvent(body);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Attendees" />
            )}
          />
          <SignedInAttendees />
        </Grid>
      </Grid>
    </div>
  );
}
