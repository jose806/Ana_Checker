import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import AddAtendeeForm from "../../Components/AddAtendeeForm/AddAtendeeForm";
import style from './AddAttendee.module.css'
export default function AddAttendee() {
  return (
    <div>
      <div>
        <Breadcrumbs>
          <Link underline="hover" href="/">
            View Attendees
          </Link>
          <Typography>Add New Attendee</Typography>
        </Breadcrumbs>
      </div>
      <div className={style.Form}>
        <AddAtendeeForm />
      </div>
    </div>
  );
}
