import style from "./ImageCard.module.css";

export default function ImageCard({ card, onSelect }) {
  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() =>
          onSelect(true, {
            src: card.urls.regular,
            description: card.alt_description,
          })
        }
      />
      <div className={style.overlay}>
        <p className={style.text}>Likes: {card.likes}</p>
        <p className={style.text}>Author: {card.user.name}</p>
        <p className={style.text}>Description: {card.description}</p>
      </div>
    </div>
  );
}
