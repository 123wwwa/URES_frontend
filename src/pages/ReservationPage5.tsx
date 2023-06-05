import { FunctionComponent } from "react";
import DryerContainer from "../components/DryerContainer";
import FooterSection from "../components/FooterSection";
import styles from "./ReservationPage5.module.css";
const ReservationPage5: FunctionComponent = () => {
  return (
    <div className={styles.reservationPage5}>
      <div className={styles.reservationPage5Inner}>
        <div className={styles.reservationPage5Inner}>
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
      <div className={styles.selectWrapper}>
        <div className={styles.select}>Select</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <div className={styles.stWashingMachineParent}>
            <div className={styles.stWashingMachine}>1st Washing machine</div>
            <div className={styles.groupWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <img className={styles.groupItem} alt="" src="/ellipse-1.svg" />
                <div className={styles.groupInner} />
                <div className={styles.div}>25:15</div>
              </div>
            </div>
          </div>
        </div>
        <DryerContainer progressText="2 / 4" />
        <div className={styles.skipWrapper}>
          <div className={styles.stWashingMachine}>SKIP</div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ReservationPage5;
