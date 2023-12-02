import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import moment from "moment/moment";

function Post(props) {
  const Like = props.likes;
  const Likecount = Like.length;

  const formatDuration = (duration) => {
    const minutes = duration.asMinutes();
    const hours = duration.asHours();
    const days = duration.asDays();
    const weeks = duration.asWeeks();
    const years = duration.asYears();

    if (minutes < 60) {
      return `${Math.floor(minutes)}m`;
    } else if (hours < 24) {
      return `${Math.floor(hours)}h`;
    } else if (days < 7) {
      return `${Math.floor(days)}d`;
    } else if (weeks < 52) {
      return `${Math.floor(weeks)}w`;
    } else {
      return `${Math.floor(years)}y`;
    }
  };

  const date = moment(props.date) 

  const duration = moment.duration(moment().diff(date));
  const formattedDuration = formatDuration(duration);

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar src={props.userimg} style={{ marginRight: "10px" }} />
          {props.user} • <span> {formattedDuration}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={props.postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div>{props.caption}</div>
        Liked by {Likecount} people.
      </div>
    </div>
  );
}

export default Post;
