import React from "react";
import Avatar from "@material-ui/core/Avatar";
import SmileyFace from "@material-ui/icons/EmojiEmotions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import LinkedButton from "../Components/LinkedButton";
import ContentContainer from "../Components/ContentContainer";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    marginBottom: 30,
    fontWeight: 100,
  },
  button: {
    width: "50%",
  },
  existingUser: {
    textAlign: "center",
    margin: "20px auto",
  },
  signInLink: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

// Home Page
function Home() {
  const classes = useStyles();
  return (
    <ContentContainer maxWidth="md">
      <Avatar className={classes.avatar}>
        <SmileyFace />
      </Avatar>
      <Typography variant="h3" className={classes.title}>
        🍕🎲 Welcome to my App 🚀👻
      </Typography>
      <LinkedButton to="/sign-up" className={classes.button}>
        Sign Up
      </LinkedButton>
      <div className={classes.existingUser}>
        Already have an account?
        <Link to="/account" className={classes.signInLink}>
          Sign In
        </Link>
      </div>
    </ContentContainer>
  );
}

export default Home;
