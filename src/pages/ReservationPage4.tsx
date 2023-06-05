import { FunctionComponent } from "react";
import BottomFooter from "../components/BottomFooter";
import styles from "./ReservationPage4.module.css";
const ReservationPage4: FunctionComponent = () => {
  return (
    <div className={styles.reservationPage4}>
      <div className={styles.reservationPage4Inner}>
        <div className={styles.reservationPage4Inner}>
          <div className={styles.frameContainer}>
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
      </div>
      <div className={styles.reservationPage4Child} onClick={(e)=>window.location.href = "/history-page1"}>
        <div className={styles.yourReservationIsCompleteTParent}>
          <div className={styles.yourReservationIsContainer}>
            <span className={styles.yourReservationIsContainer1}>
              <p className={styles.yourReservationIs}>
                Your reservation is complete
              </p>
              <p className={styles.yourReservationIs}>
                Thank you for using it!
              </p>
            </span>
          </div>
          <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
        </div>
      </div>
      <BottomFooter image27AlignItems="flex-start" />
    </div>
  );
};

export default ReservationPage4;
