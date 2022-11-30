import React from "react";
import styles from "../moduleCss/button1.module.css";
function Button1(props) {
  return (
    <div>
      <button className={`${styles.button} ${styles.padding}`}>
        Button One
      </button>
    </div>
  );
}

export default Button1;
