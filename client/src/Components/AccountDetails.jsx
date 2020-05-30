import React from "react";
import ContentContainer from "./ContentContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  welcomeMsg: {
    marginBottom: 30,
    fontWeight: 100,
  },
  bold: {
    fontWeight: 900,
    display: "inline",
  },
  text: {
    margin: 20,
  },
}));

// Displays user's info when they are signed in
function AccountDetails(props) {
  const classes = useStyles();

  return (
    <ContentContainer maxWidth="md">
      <Typography variant="h3" className={classes.welcomeMsg}>
        Welcome <p className={classes.bold}>{props.user.name}</p>
      </Typography>
      <p className={classes.text}>This is your personalized home page</p>
      <Button variant="contained" color="primary" onClick={props.handleSignOut}>
        Sign Out
      </Button>
    </ContentContainer>
  );
}

export default AccountDetails;
