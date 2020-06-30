import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Form } from "@unform/web";
import Input from "../Input";
import InputSelect from "../InputSelect";
import InputMask from "../InputMask";
import InputDate from "../InputDate";
import { makeStyles } from "@material-ui/core/styles";
import { listaAcoes } from "../../utils/ativos";
import api from "../../utils/api";
import { formatter } from "../../utils/utils";

export default function AlertDialog({ icon }) {
  const formRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(data, { reset }) {
    data.wallet_id = 6;
    console.log(data);
    // const response = await api.post("/create_wallet_component", { data });
    // if (response.data.status) {
    //   console.log("ativo criado");
    // }

    reset();
  }

  const useStyles = makeStyles({
    title: {
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      background: "#092c4c",
      color: "white",
    },
    body: {
      padding: "18px",
      background: "#f2994a",
      color: "white",
      display: "flex",
      justifyContent: "center",
    },
    footer: {
      display: "flex",
      justifyContent: "space-around",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={icon}
        onClick={handleClickOpen}
      >
        Adicionar ativo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          Nova posição
        </DialogTitle>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <DialogContent className={classes.body}>
            <DialogContentText id="alert-dialog-description">
              <InputSelect
                name="stock_id"
                type="stock_id"
                label="Ativo"
                options={listaAcoes}
              />
              <Input name="qtd" type="qtd" label="Quantidade" />
              <Input name="price" type="price" label="Preço de Custo (R$)" />
              <InputDate name="date" type="date" label="Data" />
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.footer}>
            <Button onClick={handleClose} color="default">
              FECHAR
            </Button>
            <Button color="primary" variant="contained" autoFocus type="submit">
              ENVIAR OPERAÇÃO
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </div>
  );
}
