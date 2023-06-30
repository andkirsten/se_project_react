import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  name,
  avatar,
  onAddItem,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
}) => {
  return (
    <div className="profile">
      <SideBar name={name} avatar={avatar} />
      <ClothesSection
        onAddItem={onAddItem}
        onSelectedCard={onSelectedCard}
        onPreviewClick={onPreviewClick}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
