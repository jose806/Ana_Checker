import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ActiveEventCard from "../EvenCard/ActiveEventCard";
export default function ActiveEventContainer() {
  //Geting state from redux
  const events = useSelector((state) => {
    return state.events;
  });
  const organizeCards = () => {
    const cards = [];
    events.forEach((event, index) => {
      cards.push(<ActiveEventCard key={index} event={event}/>);
    });
    return cards;
  };
  return <Stack spacing={2}>{organizeCards()}</Stack>;
}
