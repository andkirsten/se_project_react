import React, { useState, useContext } from "react";
import "./ItemCard.css";
import heart from "../../images/heart.svg";
import likedHeart from "../../images/likeHeart.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ItemCard = ({
  item,
  onSelectedCard,
  onPreviewClick,
  handleLikeClick,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(
    item.likes.some((like) => like === currentUser?._id)
  );

  const likeBtnStyle = {
    backgroundImage: `url(${isLiked ? likedHeart : heart})`,
  };

  const onLikeClick = (event) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
    handleLikeClick({
      id: item._id,
      isLiked,
    });
  };

  const cardStyle = {
    backgroundImage: `url(${item.imageUrl})`,
  };

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
        {currentUser && (
          <span
            className="card__like"
            style={likeBtnStyle}
            onClick={onLikeClick}
          ></span>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
