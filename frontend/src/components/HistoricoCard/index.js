import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import api from "../../utils/api";
import { formatter } from "../../utils/utils";
import LineChart from "../LineChart";

const useStyles = makeStyles({
  root: {
    Width: 400,
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
    color: "#092c4c",
  },
  pos: {
    marginBottom: 12,
    marginRight: 20,
  },
});

export default function SimpleCard({ header, body }) {
  const [components, setComponents] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    async function getWalletComponents() {
      const response = await api.get("/get_wallet_component/6");
      if (response.data.status) {
        setComponents(response.data.data);
      }
    }
    getWalletComponents();
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent className="card-body-bigger">
        <div className="card-body-header">
          <Typography className={classes.cardTitle}>Histórico</Typography>
        </div>
        <div className="card-body-body">
          <LineChart />
        </div>
      </CardContent>
    </Card>
  );
}
