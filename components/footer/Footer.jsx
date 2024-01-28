import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BiwasBhandari</div>
      <div className={styles.text}>
        biwas bhandari creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
