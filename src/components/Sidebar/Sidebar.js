import React from "react";
import "./Sidebar.css";

const Sidebar = ({ avatar, name }) => {
  return (
    <aside className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <h2 className="sidebar__name">{name}</h2>
    </aside>
  );
};

export default Sidebar;
