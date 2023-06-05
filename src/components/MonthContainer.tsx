import { FunctionComponent } from "react";
import styles from "./MonthContainer.module.css";
const MonthContainer: FunctionComponent = () => {
  return (
    <div className={styles.today}>
      <div className={styles.title}>
        <img className={styles.iconleft} alt="" src="/iconleft.svg" />
        <div className={styles.february2023}>March 2023</div>
        <img className={styles.iconleft} alt="" src="/iconright.svg" />
      </div>
      <div className={styles.weekdayParent}>
        <div className={styles.weekday}>
          <div className={styles.weekItem}>
            <div className={styles.sum}>SUM</div>
          </div>
          <div className={styles.weekItem}>
            <div className={styles.sum}>MON</div>
          </div>
          <div className={styles.weekItem}>
            <div className={styles.sum}>TUE</div>
          </div>
          <div className={styles.weekItem}>
            <div className={styles.sum}>WED</div>
          </div>
          <div className={styles.weekItem}>
            <div className={styles.sum}>THU</div>
          </div>
          <div className={styles.weekItem}>
            <div className={styles.sum}>FRI</div>
          </div>
          <div className={styles.weekItem}>
            <div className={styles.sum}>SAT</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.dayItemParent}>
            <div className={styles.dayItem}>
              <div className={styles.bg} />
              <div className={styles.date}>26</div>
            </div>
            <div className={styles.dayItem}>
              <div className={styles.bg} />
              <div className={styles.date1}>27</div>
            </div>
            <div className={styles.dayItem}>
              <div className={styles.bg} />
              <div className={styles.date}>28</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date3}>1</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date4}>2</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date4}>3</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date6}>4</div>
            </div>
          </div>
          <div className={styles.dayItemParent}>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date6}>5</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date6}>6</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date4}>7</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date6}>8</div>
            </div>
            <div className={styles.dayItem11}>
              <img className={styles.bgIcon} alt="" src="/bg.svg" />
              <div className={styles.date6}>9</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>10</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date13}>11</div>
            </div>
          </div>
          <div className={styles.dayItemParent}>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>12</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>13</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>14</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>15</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>16</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>17</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>18</div>
            </div>
          </div>
          <div className={styles.dayItemParent}>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>19</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>20</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>21</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>22</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>23</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>24</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>25</div>
            </div>
          </div>
          <div className={styles.dayItemParent}>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>26</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>27</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>28</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>29</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date}>30</div>
            </div>
            <div className={styles.dayItem3}>
              <div className={styles.bg} />
              <div className={styles.date1}>31</div>
            </div>
            <div className={styles.dayItem}>
              <div className={styles.bg} />
              <div className={styles.date3}>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthContainer;
