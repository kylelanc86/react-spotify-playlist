import { useState } from "react";
import styles from "./searchbar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const passTerm = () => {
    props.onSearch(term);
  };

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  };

  return (
    <div className={styles.SearchBar}>
      <input
        onChange={handleTermChange}
        placeholder="Enter A Song, Album, or Artist"
      />
      <button className={styles.SearchButton} onClick={passTerm}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
