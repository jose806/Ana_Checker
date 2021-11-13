import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EventsTheyAttendended() {
  //Geting state from redux
  const events = useSelector((state) => {
    return state.events;
  });

  // Gets the state of attendees
  c; //Geting state from redux
  const selectedAttendee = useSelector((state) => {
    return state.selectedAttendee;
  });
  const { clientId } = useSelector;

  function getEvents() {
    const eventList = [];
    selectedAttendee.eventsAttendeed.forEach((id) => {
      events.forEach((singleEvent) => {
        console.log(singleEvent);
      });
    });
  }
  const myEvents = getEvents();

  return (
    <div>
      <Paper></Paper>
    </div>
  );
}
