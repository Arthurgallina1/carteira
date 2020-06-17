import React from "react";
import Button from "@material-ui/core/Button";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import Card from "../Card";
import { AiOutlinePlus } from "react-icons/ai";
import Dialog from "../Dialog";
import "./styles.scss";

export default function Painel() {
  return (
    <div className="painel-container">
      <div className="painel-header">
        <big>Dashboard</big>
        <Dialog icon={<AiOutlinePlus size={22} color={"white"} />} />
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
