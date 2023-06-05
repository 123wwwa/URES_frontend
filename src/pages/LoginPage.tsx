import { FunctionComponent } from "react";
import styles from "./LoginPage.module.css";
const LoginPage: FunctionComponent = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.takeMyLaundryWrapper}>
        <div className={styles.takeMyLaundry}>Take my Laundry</div>
      </div>
      <div className={styles.loginPageInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <input className={styles.image2Parent} placeholder="Email/Username">
                {/* <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.emailusername}>email/username</div> */}
              </input>
            </div>
            <input className={styles.image3Parent} placeholder="Password" onChange={(e) => console.log(e.target.value)} type="password">
              {/* <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
              <div className={styles.emailusername}>Password</div> */}
            </input>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild} />
              </div>
              <b className={styles.emailusername}>Save ID/PW</b>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.loginWrapper} onClick={(e)=>{ window.location.href = "/reservation-page21"}}>
                <b className={styles.login}>Login</b>
              </div>
            </div>
            <div className={styles.image4Wrapper}>
              <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
