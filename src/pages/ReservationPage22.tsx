import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import styles from "./ReservationPage22.module.css";
const ReservationPage22: FunctionComponent = () => {
  return (
    <div className={styles.reservationPage22}>
      <div className={styles.reservationPage22Inner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image21Wrapper}>
              <img
                className={styles.image21Icon}
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className={styles.image30Wrapper}>
              <img
                className={styles.image30Icon}
                alt=""
                src="/image-30@2x.png"
              />
            </div>
            <div className={styles.image29Wrapper}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-29@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.selectTheAmountOfYourLaunWrapper}>
        <div className={styles.selectTheAmount}>
          Select the amount of your laundry.
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer} onClick={(e)=> window.location.href = "/"}>
          <img className={styles.frameChild} alt="" src="/frame-60@2x.png" />
        </div>
        <div className={styles.youMayNeed70mlOfParent}>
          <div className={styles.youMayNeedContainer}>
            <p className={styles.p}>40%</p>
            <p className={styles.p}>You may Need 70ml of</p>
          </div>
          <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage22;
