import { Paper, Typography } from "@mui/material";
import React from "react";
import style from "./EventForm.module.css";
export default function EventForm() {
  return (
    <div className={style.Container}>
      <Paper sx={{ padding: "30px" }}>
        <div className={style.Title}>
          <Typography variant="h4">New Event Form</Typography>
        </div>
      </Paper>
    </div>
  );
}
