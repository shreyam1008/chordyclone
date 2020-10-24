import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { selectUser } from "./features/userSlice";
import { selectChannelID, selectChannelName } from "./features/appSlice";
import { useSelector } from "react-redux";
import db from "./firebase";
import firebase from "firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelID);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            disabled={!channelId}
            placeholder={`messages ${channelName}`}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            send message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
