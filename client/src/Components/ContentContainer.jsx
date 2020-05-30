import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function ContentContainer(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth={props.maxWidth}>
      <Paper className={classes.paper}>{props.children}</Paper>
    </Container>
  );
}

export default ContentContainer;
