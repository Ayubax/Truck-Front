import React from "react";
import styles from "./footer.module.scss";
import logo from "../../public/logo_2.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.general}>
        <div className={styles.logo}>
          <img src={logo} />
          <p>TruckCompany</p>
        </div>
        <div className={styles.location}>
          <p>364001,Грозный, ул. Трошева 14</p>
        </div>
        <div className={styles.contact}>
          <p>+79380877887 +78767483922</p>
        </div>
      </div>
      <div className={styles.dno}>
        <p>© Intocode 2022</p>
        <p>made by: S.S|S-A|S.A</p>
      </div>
    </footer>
  );
};

export default Footer;
