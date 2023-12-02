import React from "react";
import { Storypart } from "../Storypart";
import { useState } from "react";
import axios from "axios";
import { Url } from "../Url";
import { useEffect } from "react";

export const Homefide = () => {
  const Userid = localStorage.getItem("uid");
  const Token = localStorage.getItem("token");
  const [Following, setFollwing] = useState([]);

  useEffect(() => {
    axios
      .get(Url() + "/user/findbyid?id=" + Userid, {
        headers: {
          token: Token,
        },
      })
      .then((res) => {
        // console.log(res.data.data[0].follow);
        setFollwing(res.data.data[0].follow);
      });
  }, [Following]);

  return (
    <div className="stroy-part flex">
      {/* <Storypart userimg={""} username={"milanahir227"} /> */}
      {Following.map((el) => {
        return <Storypart userimg={Url() + '/images/user/' +el.uimage} username={el.uname} />;
      })}
    </div>
  );
};
