import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { BsWallet, BsGraphUp } from "react-icons/bs";
import Typography from "@material-ui/core/Typography";
import "./styles.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    marginRight: 40,
  },
  body: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    color: "green",
  },
  titleRed: {
    fontSize: 16,
    color: "red",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  pos: {
    marginBottom: 12,
    marginRight: 20,
  },
});

export default function SimpleCard({ icon, headerText, subText }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className="card-body">
        <div className="card-body-left">
          <div className="icon-box">{icon}</div>
        </div>
        <div className="card-body-right">
          <Typography className={classes.cardTitle}>{headerText}</Typography>
          <Typography
            className={subText > 0 ? classes.title : classes.titleRed}
            color="textSecondary"
            gutterBottom
          >
            {subText}
          </Typography>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
