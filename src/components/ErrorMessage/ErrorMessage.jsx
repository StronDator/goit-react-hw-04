import style from "./ErrorMessage.module.css";

export default function ErrorMessage({ children }) {
  return (
    <p className={style.text}>
      <strong>{children}</strong>
    </p>
  );
}
