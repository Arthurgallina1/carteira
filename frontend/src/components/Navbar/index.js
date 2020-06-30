import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { useSelector } from "react-redux";
import "./styles.scss";
export default function Navbar() {
  // const username = useSelector((state) => state.auth.user.username);

  return (
    <div className="header-container">
      <div className="header-content">
        <nav></nav>
        <aside>
          {/* <Notifications /> */}
          <div className="header-profile">
            <div>
              {/* <strong>{username}</strong> */}
              <Link to="/profile">My Profile</Link>
            </div>
            <div className="img-box">
              <img
                src={"https://api.adorable.io/avatars/50/abott@adorable.png"}
                alt=""
              />
            </div>
            <div className="icons-box">
              <IoMdNotificationsOutline size={28} color={"#092c4c"} />
              <IoMdLogOut size={28} color={"#092c4c"} />
            </div>
          </div>
        </aside>
        {/* <nav>
          
        </nav> */}
      </div>
    </div>
  );
}
