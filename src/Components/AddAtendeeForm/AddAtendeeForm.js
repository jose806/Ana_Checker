import {
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Stack,
  InputLabel,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { getStates } from "./config";
import { useSelector } from "react-redux";
import { BaseUrl } from "../../config";
import axios from "axios";
import LoadingButton from "../LoadingButton/LoadingButton";

export default function AddAtendeeForm() {
  //Geting state from redux
  const loggedInUserState = useSelector((state) => {
    return state.user;
  });

  // Here I Keep the variables ----------------------------------------------------------
  const stateAbbreviations = getStates();
  const [stateOfResidence, setStateOfResidence] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const VARIANT = ["standard", "outlined", "filled"];
  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const cityRef = React.useRef();
  const childrenRef = React.useRef();
  const phoneRef = React.useRef();
  const [successAlert ,setSuccessAlert] = React.useState();
  // Functions are Kept below here ------------------------------------------------------------------

  function postAttendee(attendee) {
    return axios({
      method: "post",
      url: `${BaseUrl}/newAttendee`,
      data: attendee,
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => {
        setLoading(false);
        setSuccessAlert(response.data.message)
        console.log("Succeess", response.data.message);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  const stateOfResidenceHandler = (event) => {
    event.preventDefault();
    setStateOfResidence(event.target.value);
  };

  const submitHandler = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log("Submit", loggedInUserState);
    if (!loggedInUserState) {
      return console.log("Not Logged in");
    }
    const attendee = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phone: `${phoneRef.current.value}`,
      location: `${cityRef.current.value}, ${stateOfResidence}`,
      children: `${childrenRef.current.value}`,
      eventsAttendeed: [],
      organizerId: loggedInUserState.uid,
    };
    postAttendee(attendee);
    console.log(loading);
  };

  return (
    <Box sx={{ width: "600px", maxWidth: "550px" }}>
      <Paper sx={{ padding: "30px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography variant="h4">New Attendee Form</Typography>
          {successAlert && <Alert>{successAlert}</Alert>}
        </div>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              type="text"
              variant={VARIANT[1]}
              label="First Name"
              inputRef={firstNameRef}
            />
            <TextField
              inputRef={lastNameRef}
              type="text"
              variant={VARIANT[1]}
              label="Last Name"
            />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              inputRef={phoneRef}
              type="tel"
              variant={VARIANT[1]}
              label="Phone Number"
            />
            <TextField
              inputRef={childrenRef}
              type="number"
              variant={VARIANT[1]}
              label="Number of Children"
            />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              inputRef={cityRef}
              type="text"
              variant={VARIANT[1]}
              label="City"
            />
            <FormControl variant={VARIANT[1]} sx={{ minWidth: "194px" }}>
              <InputLabel id="state-selector-label">State</InputLabel>
              <Select
                labelId="state-selector-label"
                label="State"
                value={stateOfResidence}
                onChange={stateOfResidenceHandler}
              >
                {stateAbbreviations.map((state, index) => {
                  return (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Stack>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            {loading === false ? (
              <Button
                onClick={submitHandler}
                variant="contained"
                sx={{ width: "404px" }}
              >
                Submit
              </Button>
            ) : (
              <LoadingButton />
            )}
          </div>
        </Stack>
      </Paper>
    </Box>
  );
}
