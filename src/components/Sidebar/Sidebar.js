import React from "react";
import "./SideBar.css";

const SideBar = ({ avatar, name }) => {
  return (
    <aside className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <h2 className="sidebar__name">{name}</h2>
    </aside>
  );
};

export default SideBar;
