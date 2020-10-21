import React from "react";
import "./Message.css";
import Avatar from "@material-ui/core/Avatar";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          --sender--
          <span className="message__timestamp">time of msg</span>
        </h4>
        <p>this is msg</p>
      </div>
    </div>
  );
};

export default Message;
