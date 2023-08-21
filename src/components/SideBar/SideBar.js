import React from "react";
import "./SideBar.css";

const SideBar = ({ avatar, name, handleLogout, setActiveModal }) => {
  const handleUpdateClick = () => {
    setActiveModal("edit-profile");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="avatar" />
        <h2 className="sidebar__name">{name}</h2>
      </div>
      <div className="sidebar__group">
        <button
          className="sidebar__btn"
          type="text"
          onClick={handleUpdateClick}
        >
          Change Profile Data
        </button>
        <button className="sidebar__btn" type="text" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
