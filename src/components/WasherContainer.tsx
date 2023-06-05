import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./WasherContainer.module.css";

type WasherContainerType = {
  washerDryerSize?: string;
  washerDryerModelNumber?: string;
  washerDryerRatio?: string;

  /** Style props */
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propHeight?: Property.Height;
};

const WasherContainer: FunctionComponent<WasherContainerType> = ({
  washerDryerSize,
  washerDryerModelNumber,
  washerDryerRatio,
  propColor,
  propColor1,
  propHeight,
}) => {
  const washerStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
      height: propHeight,
    };
  }, [propColor1, propHeight]);

  return (
    <div className={styles.frameParent} onClick={(e)=> window.location.href = "/reservation-page4"}>
      <div className={styles.image31Parent}>
        <img className={styles.image31Icon} alt="" src={washerDryerSize} />
        <div className={styles.washerParent}>
          <div className={styles.washer} style={washerStyle}>
            {washerDryerModelNumber}
          </div>
          <div className={styles.div} style={divStyle}>
            {washerDryerRatio}
          </div>
        </div>
      </div>
      <div className={styles.availableWrapper} >
        <div className={styles.available}>Available</div>
      </div>
    </div>
  );
};

export default WasherContainer;
