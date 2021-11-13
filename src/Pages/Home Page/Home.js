import { Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import AttendeePanel from "../../Components/AttendeePanel/AttendeePanel";
import React from "react";
import style from "./Home.module.css";
import EventDashboardPage from "../Event Page/EventDashboardPage";
import { Box } from "@mui/system";
const Home = () => {
  //Geting state from redux
  const attendees = useSelector((state) => {
    return state.attendees;
  });

  // State for the tabs
  const [tabValue, setTabValue] = React.useState(1);

  const tabHandler = (event, newValue) => {
    console.log("Event", event);
    setTabValue(newValue);
  };
  return (
    <div className={style.Container}>
      <div className={style.Tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={tabHandler}>
          <Tab label="Events" />
          <Tab label="Attendees" />
        </Tabs>
        </Box>
      </div>

      {attendees && tabValue === 1 && <AttendeePanel />}
      {tabValue === 0 && <EventDashboardPage/>}
    </div>
  );
};

export default Home;
