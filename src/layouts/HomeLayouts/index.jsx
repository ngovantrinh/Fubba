import React, { useMemo, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import styles from "./index.module.scss";
import global from "../../App.module.scss";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import InputSearch from "../../components/Input/InputSearch";
import { Outlet, Link } from "react-router-dom";

function HomeLayouts() {
  const { t } = useTranslation();
  const [chairClass, setChairClass] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <div>
      <div className={styles.header}>
        <select onChange={changeLanguage}>
          <option value="eng">English</option>
          <option value="vie">Vietnamese</option>
        </select>
        {/* <h3>{t("title")}</h3> */}
        <div className={global.container}>
          <div className={styles.info_contact}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.header_right}>
              <div className={styles.hotline}>
                <div className={styles.contact_item}>
                  <div className={styles.icon_header}></div>
                  <div>
                    <p>HOTLINE</p>
                    <p>+84344354894</p>
                  </div>
                </div>
                <div className={styles.contact_item}>
                  <div className={styles.icon_header}></div>
                  <div>
                    <p>EMAIL</p>
                    <p>trinh@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className={styles.cart_box}>
                <div className={styles.contact_item}>
                  <div className={styles.cart_icon}>
                    <div className={styles.number_cart}>1</div>
                  </div>
                  <div className={styles.cart_price}>
                    <p className={styles.my_cart}>My cart - </p>
                    <p>$0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.feature_box}>
          <div
            className={`${global.container} ${styles.header_feature} ${
              chairClass && styles.active
            }`}
          >
            <ul className={styles.title_feature}>
              <li
                className={`${styles.item} ${styles.chair}`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
              >
                <p>{t("chair")}</p>
                <div
                  className={`${styles.menu_hover} ${
                    isActive && styles.active
                  }`}
                >
                  here
                </div>
              </li>
              <li className={`${styles.item} ${styles.dining_table}`}>
                {t("dining-table")}
              </li>
              <li className={`${styles.item}`}>{t("bed-room")}</li>
              <li className={`${styles.item}`}>{t("light-decor")}</li>
              <li className={`${styles.item}`}>{t("blog")}</li>
            </ul>
            <div className={styles.search}>
              <InputSearch />
            </div>
          </div>
        </div>
        <div className={styles.location_page}> </div>
      </div>
      <Outlet></Outlet>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={global.container}>
            <div className={styles.content}>
              <div className={styles.block_footer}>
                <p className={styles.title}>YOUR ACCOUNT</p>
                <ul className={styles.option}>
                  <li>
                    <Link to={{ pathname: "/" }}>info</Link>
                  </li>
                  <li>
                    <Link to={{ pathname: "/about" }}>ddddd</Link>
                  </li>
                  <li>order</li>
                  <li>asd</li>
                </ul>
              </div>
              <div>here</div>
              <div>here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayouts;
