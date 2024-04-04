import style from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={style.container}>
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#646cff"
        radius="8"
        ariaLabel="three-dots-loading"
      />
      <p className={style.text}>
        <strong>Loading</strong>
      </p>
    </div>
  );
}
