import { Breadcrumbs, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import FullAttendeCard from "../../Components/FullAttendeeCard/FullAttendeCard";
import { Link } from "react-router-dom";
import AttendeeEventPanel from "../../Components/AttendeeShowsEvent/AttendeeEventPanel";
export default function AttendeDetailsPage() {
  return (
    <div>
      <Breadcrumbs>
        <Button component={Link} to="/">
          Clients
        </Button>
        <Typography>Details</Typography>
      </Breadcrumbs>
      <Divider />
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={4}>
          <FullAttendeCard />
        </Grid>
        <Grid item xs={8}>
          <AttendeeEventPanel />
        </Grid>
      </Grid>
    </div>
  );
}
