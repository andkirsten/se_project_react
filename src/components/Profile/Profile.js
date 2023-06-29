import React from "react";
import "./Profile.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

const Profile = ({
  name,
  avatar,
  onAddItem,
  onSelectedCard,
  onPreviewClick,
}) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <img className="profile__avatar" src={avatar} alt="avatar" />
        <h2 className="profile__name">{name}</h2>
      </div>
      <section className="profile__items">
        <div className="profile__items-header">
          <p>Your items</p>
          <button
            className="profile__add-button"
            type="button"
            onClick={onAddItem}
          >
            + Add new
          </button>
        </div>
        <div className="profile__items-list">
          {defaultClothingItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedItem={onSelectedCard}
              onPreviewClick={onPreviewClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
