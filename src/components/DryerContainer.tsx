import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./DryerContainer.module.css";

type DryerContainerType = {
  progressText?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const DryerContainer: FunctionComponent<DryerContainerType> = ({
  progressText,
  propBackgroundColor,
}) => {
  const frameDiv5Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.frameWrapper} style={frameDiv5Style}>
      <div className={styles.frameParent}>
        <div className={styles.image37Wrapper}>
          <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
        </div>
        <div className={styles.dryerParent}>
          <div className={styles.dryer}>Dryer</div>
          <div className={styles.div}>{progressText}</div>
        </div>
      </div>
    </div>
  );
};

export default DryerContainer;
