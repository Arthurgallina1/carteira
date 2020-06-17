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
          <Typography className={classes.cardTitle}>Resumo</Typography>
        </div>
        <div className="card-body-body">
          <Typography
            // className={subText > 0 ? classes.title : classes.titleRed}
            color="textSecondary"
            gutterBottom
          >
            <div className="info-table">
              <span className="resumo-card-span">
                <strong>Código</strong>
              </span>
              <span className="resumo-card-span">
                <strong>Preço</strong>
              </span>
              <span className="resumo-card-span">
                <strong>Preço</strong>
              </span>
              <span className="resumo-card-span">
                <strong>Qtd</strong>
              </span>
              <span className="resumo-card-span">
                <strong>Atual</strong>
              </span>
              {components.map((component) => (
                <>
                  <span className="component-span">{component.stock}</span>
                  <span className="component-span">
                    {formatter.format(component.buy_price)}
                  </span>
                  <span className="component-span">
                    {formatter.format(component.buy_price)}
                  </span>
                  <span className="component-span">{component.quantity}</span>
                  <span className="component-span">
                    {formatter.format(component.quantity * component.buy_price)}
                  </span>
                </>
              ))}
            </div>
          </Typography>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
