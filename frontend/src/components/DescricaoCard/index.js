import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { BsWallet, BsGraphUp } from "react-icons/bs";
import Typography from "@material-ui/core/Typography";
import api from "../../utils/api";
import { formatter } from "../../utils/utils";
import "./styles.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
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
    color: "#f2994a",
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
      <CardContent className="descricacao-card">
        <div className="descricao-card-header">
          <Typography className={classes.cardTitle}>Descrição</Typography>
        </div>
        <div className="descricao-card-body"></div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
