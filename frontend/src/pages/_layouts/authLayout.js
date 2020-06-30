import React from "react";
import Sidebar from "../../components/Sidebar";
import NewSideBar from "../../components/NewSideBar";
import "./styles.scss";
// import { Wrapper } from './styles'
export default function authLayout({ children }) {
  return (
    <div className="auth-layout">
      {/* <Sidebar /> */}
      {children}
    </div>
  );
}
