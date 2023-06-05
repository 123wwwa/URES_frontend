import { FunctionComponent, useEffect, useState} from "react";
import Container307 from "../components/Container307";
import WasherContainer from "../components/WasherContainer";
import HistoryCard from "../components/HistoryCard";
import styles from "./ReservationPage3.module.css";
import moment from "moment";
const ReservationPage3: FunctionComponent = () => {
  const fakeSecondData = [ // 0~ 3000
    2004,
    1202,
    2678,
    2104,
    802,
    1202,
    2278,
    2004,
  ];
  const [second, setSecond] = useState(fakeSecondData);
  useEffect(() => {
    //update second
    const interval = setInterval(() => {
      setSecond(second.map((s) => s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [second]);
  const formatSecond = (second: number) => {
    const formatted = moment.utc(second*1000).format('mm:ss');
    return formatted;
  }
  return (
    <div className={styles.reservationPage3}>
      <div className={styles.androidLarge2}>
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
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.availableWrapper}>
                <b className={styles.available}>Select</b>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.availableWrapper}>
                <b className={styles.available}>Select</b>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[0])}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[1])}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.instanceFrame}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[2])}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.instanceWrapper1}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[2])}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container307 second={formatSecond(second[6])}/>
          <div className={styles.image29Wrapper}>
            <div className={styles.instanceFrame}>
              <div className={styles.availableWrapper}>
                <b className={styles.available}>Select</b>
              </div>
            </div>
            <div className={styles.instanceWrapper1}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[4])}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image29Wrapper}>
            <div className={styles.instanceWrapper3}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[5])}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.instanceWrapper1}>
              <div className={styles.image29Wrapper}>
                <div className={styles.radialWatch}>
                  <div className={styles.radialWatchInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.available}>{formatSecond(second[6])}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <WasherContainer
            washerDryerSize="/image-311@2x.png"
            washerDryerModelNumber="Washer"
            washerDryerRatio=" 5/8"
            propColor="#8ee3f0"
            propColor1="#1ae885"
            propHeight="16px"
          />
          <WasherContainer
            washerDryerSize="/image-23@2x.png"
            washerDryerModelNumber="Dryer"
            washerDryerRatio="1/4"
            propColor="#f1cd87"
            propColor1="#f20e0e"
            propHeight="12px"
          />
        </div>
        <HistoryCard
          propPadding="unset"
          propBoxSizing="unset"
          propBackgroundColor="#d9d9d9"
          propBackgroundColor1="#fbfbfb"
        />
      </div>
    </div>
  );
};

export default ReservationPage3;
