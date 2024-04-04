import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ photos, onSelect }) {
  return (
    <ul className={style.list}>
      {photos.map((photo) => (
        <li className={style.item} key={photo.id}>
          <ImageCard card={photo} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}
