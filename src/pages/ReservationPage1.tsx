import { FunctionComponent } from "react";
import DryerContainer from "../components/DryerContainer";
import BottomFooter from "../components/BottomFooter";
import styles from "./ReservationPage1.module.css";
const ReservationPage1: FunctionComponent = () => {
  return (
    <div className={styles.reservationPage1}>
      <div className={styles.reservationPage1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.image21Wrapper}>
            <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
          </div>
          <div className={styles.image30Wrapper}>
            <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
          </div>
          <div className={styles.image29Wrapper}>
            <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.selectWrapper}>
        <div className={styles.select}>Select</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.image29Wrapper}>
              <img
                className={styles.image36Icon}
                alt=""
                src="/image-36@2x.png"
              />
            </div>
            <div className={styles.washingMachineParent}>
              <div className={styles.washingMachine}>Washing machine</div>
              <div className={styles.div}>5 / 8</div>
            </div>
          </div>
        </div>
        <DryerContainer progressText="0 / 4" propBackgroundColor="#ffaeae" />
      </div>
      <BottomFooter image27AlignItems="flex-end" />
    </div>
  );
};

export default ReservationPage1;
