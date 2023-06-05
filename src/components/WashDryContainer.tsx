import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./WashDryContainer.module.css";

type WashDryContainerType = {
  washDryText?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propOverflow?: Property.Overflow;
};

const WashDryContainer: FunctionComponent<WashDryContainerType> = ({
  washDryText,
  propBackgroundColor,
  propOverflow,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup} style={frameDivStyle}>
        <div className={styles.washWrapper}>
          <div className={styles.wash}>{washDryText}</div>
        </div>
        <div className={styles.image24Wrapper}>
          <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
        </div>
      </div>
      <div className={styles.frameContainer} style={frameDiv1Style}>
        <div className={styles.wrapper}>
          <div className={styles.wash}>2023/6/2 10:12-11:02</div>
        </div>
        <div className={styles.container}>
          <div className={styles.wash}>2023/5/27 09:12-10:02</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.wash}>2023/5/12 10:12-11:02</div>
        </div>
      </div>
    </div>
  );
};

export default WashDryContainer;
