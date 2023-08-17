import React, { useContext } from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = ({
  onAddItem,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="profile">
      <SideBar name={currentUser.data.name} avatar={currentUser.data.avatar} />
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
