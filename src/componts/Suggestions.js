import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import { Url } from "./Url";

function Suggestions(props) {
  return (
    
        <div className="suggestions__username" style={props.style}>
          <div className="username__left">
            <span className="avatar">
              <Avatar src={Url() + '/images/user/' +props.profile} alt="R"/>
            </span>
            <div className="username__info">
              <span className="username">{props.user}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">{props.buttontext}</button>
        </div>
      
  );
}

export default Suggestions;
