import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
const Footer: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.image25Wrapper}>
              <img
                className={styles.image25Icon}
                alt=""
                src="/image-25@2x.png"
              />
            </div>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.image25Wrapper}>
              <img
                className={styles.image25Icon}
                alt=""
                src="/image-28@2x.png"
              />
            </div>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Reservation</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.image25Wrapper}>
              <img
                className={styles.image27Icon}
                alt=""
                src="/image-27@2x.png"
              />
            </div>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>History</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
