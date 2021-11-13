import { Paper, Typography, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
export default function ActiveEventFullCard() {
  //Geting state from redux
  const event = useSelector((state) => {
    return state.selectedEvent;
  });

  const date = `${event.month} ${event.day}, ${event.year}`;
  console.log(event);

  return (
    <div>
      <Paper sx={{ padding: "40px", textAlign: "center", minHeight: "500px" }}>
        <Stack spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            {event.name}
          </Typography>
          <Typography>{date}</Typography>
        </Stack>
      </Paper>
    </div>
  );
}
