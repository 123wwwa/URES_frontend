import { FunctionComponent } from "react";
import WashDryContainer from "./WashDryContainer";
import styles from "./RecentUseContainer.module.css";
const RecentUseContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.recentUseWrapper}>
        <div className={styles.recentUse}>Recent use</div>
      </div>
      <WashDryContainer washDryText="wash" />
      <WashDryContainer
        washDryText="dry"
        propBackgroundColor="#f1cd87"
        propOverflow="hidden"
      />
    </div>
  );
};

export default RecentUseContainer;
