import React from "react";
import "./Sidebar.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarRow from "./SidebarRow";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" selected />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subsciptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subsciptions" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
    </div>
  );
}

export default Sidebar;
