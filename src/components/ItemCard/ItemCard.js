import React, { useEffect, useState } from "react";
import "./ItemCard.css";
import heart from "../../images/heart.svg";
import likedHeart from "../../images/likeHeart.svg";

const ItemCard = ({
  item,
  onSelectedCard,
  onPreviewClick,
  handleLikeClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeBtnStyle = {
    backgroundImage: `url(${isLiked ? likedHeart : heart})`,
  };

  const onLikeClick = (event) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
    handleLikeClick({ id: item._id, isLiked: item.isLiked, user: item.user });
  };

  const cardStyle = {
    backgroundImage: `url(${item.imageUrl})`,
  };

  useEffect(() => {
    item.isLiked ? setIsLiked(true) : setIsLiked(false);
  }, [item.isLiked]);

  return (
    <div
      className="card"
      style={cardStyle}
      onClick={() => {
        onSelectedCard(item);
        onPreviewClick();
      }}
    >
      <div className="card__title-container">
        <h3 className="card__title">{item.name}</h3>
        <span
          className="card__like"
          style={likeBtnStyle}
          onClick={onLikeClick}
        ></span>
      </div>
    </div>
  );
};

export default ItemCard;
