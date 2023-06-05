import { FunctionComponent } from "react";
import BottomFooter from "../components/BottomFooter";
import styles from "./ReservationPage21.module.css";
const ReservationPage21: FunctionComponent = () => {
  return (
    <div className={styles.reservationPage21}>
      <div className={styles.reservationPage21Inner}>
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
      <div className={styles.image40Wrapper} onClick={(e)=>window.location.href = "/reservation-page22"}>
        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      </div>
      <BottomFooter />
    </div>
  );
};

export default ReservationPage21;
