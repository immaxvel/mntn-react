import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.ava}>
        <i className={`${styles["fa-user-circle"]} far fa-user-circle`}></i>
      </div>
      <p className={styles.account}>Account</p>
    </div>
  );
};

export default Profile;
