import ReactModal from "react-modal";
import style from "./ImageModal.module.css";

// ReactModal.defaultStyles.overlay.backgroundColor = 'black';
ReactModal.setAppElement(document.getElementById("root"));

export default function ImageModal({ isOpen = false, photo, onChange }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={style.modal}
      overlayClassName={`${style.overlay} ${isOpen ? style.overlayIsOpen : ""}`}
    >
      <img src={photo.src} className={style.img} />
      <p className={style.text}>{photo.description}</p>
    </ReactModal>
  );
}
