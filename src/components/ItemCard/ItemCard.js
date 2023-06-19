import "./ItemCard.css";

const ItemCard = ({ imageSrc, title, handleCardClick }) => {
  const cardStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div className="card" style={cardStyle} onClick={handleCardClick}>
      <h3 className="card__title">{title}</h3>
    </div>
  );
};

export default ItemCard;
