import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

import Avatar from "@material-ui/core/Avatar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3> Daris </h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceInfo">
          <div className="text">VOICE</div>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebar__profileInfo">
          <h3>@buggythegret</h3>
          <p>#myid</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
