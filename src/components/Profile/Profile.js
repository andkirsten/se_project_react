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
  handleLogout,
  handleDeleteConfirm,
  handleLikeClick,
  setActiveModal,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <SideBar
        name={currentUser?.data?.name}
        avatar={currentUser?.data?.avatar}
        handleLogout={handleLogout}
        setActiveModal={setActiveModal}
      />
      <ClothesSection
        onAddItem={onAddItem}
        onSelectedCard={onSelectedCard}
        onPreviewClick={onPreviewClick}
        clothingItems={clothingItems}
        handleDeleteConfirm={handleDeleteConfirm}
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
};

export default Profile;
