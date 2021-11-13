import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function SignedInAttendees() {
  //Geting state from redux
  const events = useSelector((state) => {
    return state.selectedEvent;
  });

  // Gets the state of attendees
  const attendees = useSelector((state) => {
    return state.attendees;
  });
  const useEffectCondition = events.attended;
  console.log("---------Conditional-----", useEffectCondition)
  React.useEffect(() => {
    console.log("Added An Attendee");
  }, [useEffectCondition]);

  const getSignedIn = () => {
    const clients = [];
    events.attended.length > 0 &&
      attendees.forEach((client) => {
        events.attended.forEach((id) => {
          if (client.attendeeId === id) {
            clients.push(client);
          }
        });
      });
    return clients;
  };

  const signedIn = React.useMemo(() => getSignedIn(), [useEffectCondition]);

  console.log("Signed In", signedIn);

  return events.attended.length > 0 ? (
    <div>
      <Paper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableCell>Name</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell adlign="center">Number of kids</TableCell>
            </TableHead>
            <TableBody>
              {signedIn.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.firstName} {row.lastName}
                  </TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.children}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  ) : (
    <div>
      <Paper sx={{ minHeight: "100px", textAlign: "center", padding: "40px" }}>
        <Typography variant="h6">No one has signed in..</Typography>
      </Paper>
    </div>
  );
}
