import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import API from "../api";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signInRedirect: {
    textAlign: "center",
    margin: "20px auto",
  },
  signInLink: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

// Sign Up Page
function SignUp(props) {
  // Handle form values using state
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle form values after they are updated
  // Called from onChange event
  function handleInputChange(event) {
    const { value, name } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // After sign in button is clicked
  // call addUser API
  function handleSubmit() {
    API.addUser(formObject)
      .then(() => {
        // If successful, Send user to sign in page
        props.history.push("/account");
      })
      .catch((err) => console.log("An error occurred", err));
  }
  const classes = useStyles();

  return (
    <ContentContainer maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={formObject.firstName}
              onChange={handleInputChange}
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={formObject.lastName}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
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
          Sign Up
        </Button>
      </form>
      <div className={classes.signInRedirect}>
        Already have an account?
        <Link to="/account" className={classes.signInLink}>
          Sign In
        </Link>
      </div>
    </ContentContainer>
  );
}

export default SignUp;
