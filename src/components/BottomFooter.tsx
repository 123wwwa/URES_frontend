import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./BottomFooter.module.css";

type BottomFooterType = {
  /** Style props */
  image27AlignItems?: Property.AlignItems;
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  image27AlignItems,
}) => {
  const frameDiv6Style: CSS.Properties = useMemo(() => {
    return {
      alignItems: image27AlignItems,
    };
  }, [image27AlignItems]);

  return (
    <div className={styles.reservationPage21Inner} style={frameDiv6Style}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.image25Wrapper}>
            <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
          </div>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.image25Wrapper}>
            <img className={styles.image25Icon} alt="" src="/image-28@2x.png" />
          </div>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Reservation</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.image25Wrapper}>
            <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
          </div>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>History</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
