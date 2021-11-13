// MUI imports
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Header.css";
// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";
const Header = () => {
  //Geting state from redux
  const loggedInUserState = useSelector((state) => {
    return state.user;
  });

  // Getting actions for redux
  const dispatch = useDispatch();
  const { logOut} = bindActionCreators(actionCreators, dispatch);

  return loggedInUserState ? (
    // Logged in user
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>Chui's Site</Typography>
          <div className="Nav-Buttons">
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button color="inherit" onClick={logOut}>LogOut</Button>
            <Button component={Link} to="/build" color="inherit">
              Build
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    // Logged Out User
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>Chui's Site</Typography>
          <div className="Nav-Buttons">
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Signup
            </Button>
            <Button component={Link} to="/build" color="inherit">
              Build
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
