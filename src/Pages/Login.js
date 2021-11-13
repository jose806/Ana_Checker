import { Button, Paper, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import style from "./Signup Page/signup.module.css";
import { Redirect } from "react-router-dom";
// Redux imports
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../store/index";

const Login = () => {
 
  // Getting actions for redux
  const dispatch = useDispatch();
  const { addLoggedInUser } = bindActionCreators(actionCreators, dispatch);

  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((response) => {
        addLoggedInUser(response.user);
       <Redirect to="/home" />;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className={style.PaperContainer}>
      <Box sx={{ width: 500, margin: "auto" }}>
        <Paper elevation={3}>
          <div className={style.Title}>
            <Typography variant="h3" textAlign="center">
              Login
            </Typography>
          </div>
          <Stack spacing={2} sx={{ paddingLeft: 10, paddingRight: 10 }}>
            <TextField
              id="filled-basic"
              label="Email"
              type="email"
              variant="standard"
              placeholder="Enter your email"
              inputRef={emailRef}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="standard"
              type="password"
              inputRef={passwordRef}
            />
          </Stack>
          <Stack
            sx={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 15,
            }}
          >
            <Button variant="contained" onClick={submitHandler}>
              Login
            </Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
