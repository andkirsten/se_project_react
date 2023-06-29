import "./ItemCard.css";

const ItemCard = ({ item, onSelectedItem, onPreviewClick }) => {
  const cardStyle = {
    backgroundImage: `url(${item.imageUrl})`,
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onClick={() => {
        onSelectedItem(item);
        onPreviewClick();
      }}
    >
      <h3 className="card__title">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
