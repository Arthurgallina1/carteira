import React from "react";
import { BsWallet, BsGraphUp } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-topbox">
        <BsWallet size={36} color={"white"} />
      </div>
      <div className="sidebar-lowerbox">
        <div className="sidebar-lowerbox-box">
          <NavLink to="/dashboard" activeClassName="navlink-selected">
            <AiFillHome size={26} />
          </NavLink>
        </div>
        <div className="sidebar-lowerbox-box">
          <NavLink to="/profile" activeClassName="navlink-selected">
            <BsWallet size={26} />
          </NavLink>
        </div>
        <div className="sidebar-lowerbox-box">
          <NavLink to="/home" activeClassName="navlink-selected">
            <BsWallet size={26} />
          </NavLink>
        </div>
        <div className="sidebar-lowerbox-box">
          <NavLink to="/cu" activeClassName="navlink-selected">
            <BsGraphUp size={26} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
