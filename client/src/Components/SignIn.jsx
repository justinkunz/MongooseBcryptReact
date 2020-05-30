import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ContentContainer from "./ContentContainer";
import { Link } from "react-router-dom";
import API from "../api";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signUpRedirect: {
    textAlign: "center",
    margin: "20px auto",
  },
  signUpLink: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

// Sign in Page
function SignIn(props) {
  const [formObject, setFormObject] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSubmit() {
    API.signIn(formObject)
      .then((userDetails) => props.handleUserLogin(userDetails.data))
      .catch((err) => console.log("An error occurred", err));
  }
  const classes = useStyles();

  return (
    <ContentContainer maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={formObject.email}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formObject.password}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </form>
      <div className={classes.signUpRedirect}>
        Need an account?
        <Link to="/sign-up" className={classes.signUpLink}>
          Sign Up
        </Link>
      </div>
    </ContentContainer>
  );
}

export default SignIn;
