import React from "react";
import styles from "./index.module.scss";

const InputSearch = () => {
  return (
    <div className={styles.input_search}>
      <input className={styles.input} type="text" placeholder="Search" />
      <div className={styles.icon_search}></div>
    </div>
  );
};

export default InputSearch;
