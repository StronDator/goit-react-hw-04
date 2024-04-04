import style from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, children }) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
