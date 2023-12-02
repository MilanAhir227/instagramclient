import React, { useEffect } from "react";
import "./Suggestions.css";
import Suggestions from "./Suggestions";
import axios from "axios";
import { Url } from "./Url";
import { useState } from "react";

export const Sugg = () => {
  const [User, setUser] = useState({});

  useEffect(() => {
    axios
      .get(Url() + "/user/findbyid?id=" + localStorage.getItem("uid"), {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.data[0]);
        setUser(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="suggestions">
      <Suggestions
        user={User.uname}
        buttontext={"Switch"}
        style={{
          marginBottom: "40px",
        }}
        profile={User.profileimg}
      />
      <div className="suggestions__title" style={{}}>
        Suggestions for you
      </div>
      <Suggestions buttontext={"Follow"} />
      <Suggestions buttontext={"Follow"} />
      <Suggestions buttontext={"Follow"} />
      <Suggestions buttontext={"Follow"} />
      <Suggestions buttontext={"Follow"} />
    </div>
  );
};
