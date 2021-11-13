import PrivateRoute from "./Components/Routes/PrivateRoute";
import Builder from "./Pages/Builder";
import cssStyle from "./index.module.css";
import Home from "./Pages/Home Page/Home";
import Signup from "./Pages/Signup Page/Signup";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import fetchAttendees from "./Services/fetchAttendees";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index";
import PublicRoute from "./Components/Routes/PublicRoute";
import AddAttendee from "./Pages/AddAttendeePage/AddAttendee";
import fetchEvents from "./Services/fetchEvents";
import AttendeDetailsPage from "./Pages/AttendeDetailsPage/AttendeDetailsPage";
import EventDetailsPage from "./Pages/EventDetailsPage/EventDetailsPage";
function App() {
  //Geting state from redux
  const loggedInUserState = useSelector((state) => {
    return state.user;
  });
  const attendees = useSelector((state) => {
    return state.attendees;
  });
  // Getting actions for redux
  const dispatch = useDispatch();
  const { getAttendees, getEvents } = bindActionCreators(
    actionCreators,
    dispatch
  );

  async function getAttendeesFunction(uid) {
    const result = await fetchAttendees(uid);
    getAttendees(result);
  }

  async function getEventsFunction(uid) {
    const result = await fetchEvents(uid);
    getEvents(result);
  }
  React.useEffect(() => {
    if (loggedInUserState) {
      getEventsFunction(loggedInUserState.uid);
      getAttendeesFunction(loggedInUserState.uid);
    }
  }, [loggedInUserState]);
  return (
    <div>
      <Header />
      <div className={cssStyle.Container}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/addAttendee" component={AddAttendee} />
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/login" component={Login} />
          <Route path="/build" component={Builder} />
          <PrivateRoute
            path="/client/:clientId"
            component={AttendeDetailsPage}
          />
          <PrivateRoute
            path="/activeEvents/:eventId"
            component={EventDetailsPage}
          />
          <PrivateRoute path="/event/:eventId" component={EventDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
