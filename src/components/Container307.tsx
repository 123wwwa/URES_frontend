import { FunctionComponent } from "react";
import styles from "./Container307.module.css";
// useState second 
interface Props {
  second: string;
}
const Container307: FunctionComponent<Props> = ({second}) => {

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.availableWrapper}>
          <b className={styles.available}>Select</b>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.image31Wrapper}>
          <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>307</div>
        </div>
      </div>
      <div className={styles.instanceWrapper}>
        <div className={styles.radialWatchWrapper}>
          <div className={styles.radialWatch}>
            <div className={styles.radialWatchInner}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.container}>
              <b className={styles.available}>{second}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container307;
