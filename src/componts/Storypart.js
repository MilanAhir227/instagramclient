import { Avatar } from "@mui/material";
import React from "react";

export const Storypart = (props) => {
  return (
    <div className="stroy-comp">
      <button className="ring">
        <div className="img">
          <Avatar
            src={props.userimg}
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </button>
      <div className="story-uname" title={props.username}>{props.username}</div>
    </div>
  );
};
