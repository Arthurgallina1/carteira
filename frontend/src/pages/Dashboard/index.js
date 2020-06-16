import React, { useEffect } from "react";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = api.get("/get_wallet_component");
  }, []);

  return (
    <div>
      <h3>dasssssh</h3>
      <button
        onClick={() => {
          dispatch(signOut());
        }}
      >
        {" "}
        lgout
      </button>
    </div>
  );
}
