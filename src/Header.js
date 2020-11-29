import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRAJ8EDcNhGp5ykwbHdpKfK8X3rJJxqgxhg&usqp=CAU"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleInput}
        />
        <Link to={`/search/${searchTerm}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <ViewModuleIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
