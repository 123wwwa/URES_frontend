import { FunctionComponent } from "react";
import styles from "./ReservationDone.module.css";
const ReservationDone: FunctionComponent = () => {
  return (
    <div className={styles.reservationDone}>
      <div className={styles.reservationDoneInner}>
        <div className={styles.theLaundryIsDoneWrapper}>
          <div className={styles.theLaundryIs}>The laundry is done</div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDone;
