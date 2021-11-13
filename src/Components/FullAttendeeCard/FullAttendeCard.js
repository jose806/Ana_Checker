import { Paper, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { Stack } from "@mui/material";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import userIcon from "./../../Images/penguinIcon.png";
import style from "./FullAttendeeCard.module.css";
import React from "react";

//Redux
import { useSelector } from "react-redux";

export default function FullAttendeCard() {
  //Geting state from redux
  const selectAttendee = useSelector((state) => {
    return state.selectedAttendee;
  });

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  const fullName = `${titleCase(selectAttendee.firstName)} ${titleCase(
    selectAttendee.lastName
  )}`;

  return (
    <div className={style.Container}>
      <Paper sx={{ padding: "40px" , textAlign:"center", minHeight:"500px"}}>
        <img src={userIcon} className={style.Image} alt="Icon of a penguin" />
        <Stack alignItems="center" spacing={1} sx={{marginTop:"30px"}}>
          <Typography variant="h6" fontWeight="Bold">{fullName}</Typography>
          <Typography>{selectAttendee.location}</Typography>
          <Stack direction="row">
            <EventIcon />
            <Typography>
              Attended {selectAttendee.eventsAttendeed.length} times
            </Typography>
          </Stack>
          <Stack direction="row">
            <FamilyRestroomIcon />
            <Typography>{selectAttendee.children} kids</Typography>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
}
