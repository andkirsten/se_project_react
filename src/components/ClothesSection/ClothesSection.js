import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  onAddItem,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
}) => {
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
        {clothingItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelectedItem={onSelectedCard}
            onPreviewClick={onPreviewClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
