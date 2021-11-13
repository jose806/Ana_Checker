import { Alert, Button, Paper, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { auth } from "../../firebase";
// Redux store
import { useSelector, useDispatch } from "react-redux";
import style from "./signup.module.css";
import { useRef, useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const { addLoggedInUser } = bindActionCreators(actionCreators, dispatch);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  async function submitHandler(e) {
    setError(null);
    e.preventDefault();
    console.log(emailRef.current.value);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((userResponse) => {
        console.log(userResponse);
        addLoggedInUser(userResponse.user);
        setUser(userResponse);
        console.log("user", user);
      });
    } catch {
      console.log("Failed to create account");
    }
  }
  const userState = useSelector((state) => {
    return state.user;
  });
  console.log("UserLogged In", userState);
  return (
    <div className={style.PaperContainer}>
      <Box sx={{ width: 500, margin: "auto" }}>
        <Paper elevation={3}>
          <div className={style.Title}>
            <Typography variant="h3" textAlign="center">
              Signup
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
          </div>
          <Stack spacing={2} sx={{ paddingLeft: 10, paddingRight: 10 }}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="standard"
              type="email"
              placeholder="Enter your email"
              inputRef={emailRef}
            />
            <TextField
              id="filled-basic"
              label="Password"
              type="password"
              variant="standard"
              inputRef={passwordRef}
            />
            <TextField
              id="filled-basic"
              label="Password Confirmation"
              type="password"
              variant="standard"
              inputRef={passwordConfirmRef}
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
              Submit
            </Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Signup;
