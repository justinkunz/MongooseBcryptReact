import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btnLink: {
    width: "100%",
    textDecoration: "none",
  },
}));

function LinkedButton(props) {
  const classes = useStyles();
  return (
    <Link to={props.to} className={classes.btnLink}>
      <Button variant="contained" color="primary" {...props}></Button>
    </Link>
  );
}

export default LinkedButton;
