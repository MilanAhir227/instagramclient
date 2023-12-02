import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import axios from "axios";
import { Url } from "../Url";

export const Timeline = () => {
  const Token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(Url() + "/post/find", {
        headers: {
          token: Token,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setPosts(res.data.data);
      });
  }, []);
  return (
    <>
      {posts.map((el) => {
        return (
          <Post
            user={el.uid.uname}
            userimg = {Url() + '/images/user/' +el.uid.profileimg}
            postImage={Url() + '/images/post/' +el.img}
            likes={el.likes}
            date={el.date}
            caption={el.caption}
          />
        );
      })}
    </>
  );
};
