import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { BsGraphDown, BsGraphUp, BsWallet } from "react-icons/bs";
import UpperCard from "../Card";
import ResumoCard from "../ResumoCard";
import DescricaoCard from "../DescricaoCard";
import HistoricoCard from "../HistoricoCard";
import { AiOutlinePlus } from "react-icons/ai";
import Dialog from "../Dialog";
import api from "../../utils/api";

import "./styles.scss";

export default function Painel() {
  const [components, setComponents] = useState([]);

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
    <div className="painel-container">
      <div className="painel-header">
        <big>Dashboard</big>
        <div className="header-right-box">
          <Button
            color="primary"
            variant="outlined"
            style={{ marginRight: "20px" }}
          >
            <BsWallet
              size={22}
              color={"#f2994a"}
              style={{ marginRight: "10px" }}
            />
            SELECIONAR CARTEIRA
          </Button>
          <Dialog icon={<AiOutlinePlus size={22} color={"white"} />} />
        </div>
      </div>
      <div className="painel-body">
        <UpperCard
          headerText={"Rentabilidade"}
          subText={"-340%"}
          icon={<BsGraphUp size={34} color={"#fff"} />}
        />
        <UpperCard
          headerText={"Ativos"}
          subText={components.length}
          icon={<BsGraphDown size={34} color={"#fff"} />}
        />
        <UpperCard
          headerText={"Mês"}
          subText={"-10%"}
          icon={<BsGraphUp size={34} color={"#fff"} />}
        />
      </div>
      <div className="painel-lower-body">
        <DescricaoCard />
        <ResumoCard components={components} />
      </div>
      {/* <HistoricoCard /> */}
    </div>
  );
}
