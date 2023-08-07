import React from "react";
import styles from "./index.module.scss";

const VerticalProduct = () => {
  return (
    <div className={styles.product__Item}>
      <div className={styles.img__product}>
        <img src="" alt="" />
      </div>
      <p className={styles.product__name}>some text</p>
      <p>star</p>
      <div className={styles.price__box}>
        <p>price discount</p>
        <p>price</p>
        <p>% discount</p>
      </div>
    </div>
  );
};

export default VerticalProduct;
