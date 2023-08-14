import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onAddItem,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

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
        {clothingItems.map(
          (item) =>
            item.owner === currentUser._id && (
              <ItemCard
                key={item.id}
                item={item}
                onPreviewClick={onPreviewClick}
                onSelectedCard={onSelectedCard}
              />
            )
        )}
      </div>
    </section>
  );
};

export default ClothesSection;
