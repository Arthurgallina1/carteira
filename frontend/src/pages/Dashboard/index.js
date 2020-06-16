import React, { useEffect } from "react";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";
import { ThemeProvider } from "@material-ui/core/styles";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Painel from "../../components/Painel";
import { theme } from "../../utils/styles";

import "./styles.scss";
export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-right-side">
          <Navbar />
          <Painel />
        </div>
      </div>
    </ThemeProvider>
  );
}

// <button
//         onClick={() => {
//           dispatch(signOut());
//         }}
//       >
//         {" "}
//         lgout
//       </button>
