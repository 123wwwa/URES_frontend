import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HistoryCard.module.css";

type HistoryCardType = {
  /** Style props */
  propPadding?: Property.Padding;
  propBoxSizing?: Property.BoxSizing;
  propBackgroundColor?: Property.BackgroundColor;
  propBackgroundColor1?: Property.BackgroundColor;
};

const HistoryCard: FunctionComponent<HistoryCardType> = ({
  propPadding,
  propBoxSizing,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.frameGroup}>
        <div className={styles.image25Wrapper}>
          <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.home}>Home</div>
        </div>
      </div>
      <div className={styles.frameGroup} style={frameDiv3Style}>
        <div className={styles.image25Wrapper}>
          <img className={styles.image25Icon} alt="" src="/image-28@2x.png" />
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.home}>Reservation</div>
        </div>
      </div>
      <div className={styles.frameDiv} style={frameDiv4Style}>
        <div className={styles.image25Wrapper}>
          <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.home}>History</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
