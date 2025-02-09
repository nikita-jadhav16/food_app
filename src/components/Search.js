import React, { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [foodName, setFoodName] = useState("");

  const API = "";
  const API_KEY = "";

  return (
    <>
      <div className={styles.inputboxContainer}>
        <input
          type="text"
          placeholder="search food here"
          className={styles.inputbox}
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
