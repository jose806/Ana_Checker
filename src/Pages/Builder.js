import { Stack} from "@mui/material";
import React from "react";
import AddAtendeeForm from "../Components/AddAtendeeForm/AddAtendeeForm";
import EventForm from "../Components/EventForm/EventForm";

export default function Builder() {
  return (
    <div style={{ marginLeft: "100px" }}>
      <Stack direction="row" spacing={3}>
        <AddAtendeeForm />
        <EventForm />
      </Stack>
    </div>
  );
}
