import style from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (!value) {
      toast.error("Please enter valid search text!");
      return;
    }
    onSubmit(value);
  }

  return (
    <header className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
}
