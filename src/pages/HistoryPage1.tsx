import { FunctionComponent } from "react";
import MonthContainer from "../components/MonthContainer";
import RecentUseContainer from "../components/RecentUseContainer";
import HistoryCard from "../components/HistoryCard";
import styles from "./HistoryPage1.module.css";
const HistoryPage1: FunctionComponent = () => {
  return (
    <div className={styles.historyPage1} onClick={(e)=> window.location.href = "/reservation-done"}>
      <div className={styles.historyPage1Inner}>
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
      <MonthContainer />
      <RecentUseContainer />
      <HistoryCard />
    </div>
  );
};

export default HistoryPage1;
