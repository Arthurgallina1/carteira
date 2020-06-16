import React from "react";
import Button from "@material-ui/core/Button";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import Card from "../Card";
import { AiOutlinePlus } from "react-icons/ai";
import "./styles.scss";

export default function Painel() {
  return (
    <div className="painel-container">
      <div className="painel-header">
        <big>Dashboard</big>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AiOutlinePlus size={22} color={"white"} />}
        >
          Adicionar ativo
        </Button>
      </div>
      <div className="painel-body">
        <Card
          headerText={"Rentabilidade"}
          subText={"-340%"}
          icon={<BsGraphUp size={34} color={"#fff"} />}
        />
        <Card
          headerText={"Ativos"}
          subText={"32"}
          icon={<BsGraphDown size={34} color={"#fff"} />}
        />
        <Card
          headerText={"Mês"}
          subText={"-10%"}
          icon={<BsGraphUp size={34} color={"#fff"} />}
        />
      </div>
    </div>
  );
}
