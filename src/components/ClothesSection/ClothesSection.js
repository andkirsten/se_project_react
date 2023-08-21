import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onAddItem,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
  handleLikeClick,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const filteredItems = clothingItems.filter(
    (item) => item.owner === currentUser?.data?._id
  );

  return (
    <section className="clothes">
      <div className="clothes__header">
        <p>Your items</p>
        <button
          className="clothes__add-button"
          type="button"
          onClick={onAddItem}
        >
          + Add new
        </button>
      </div>
      <div className="clothes__items-list">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onPreviewClick={onPreviewClick}
            onSelectedCard={onSelectedCard}
            handleLikeClick={handleLikeClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
