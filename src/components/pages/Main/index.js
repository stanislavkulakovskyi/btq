import React from "react";

import { Hero } from "../../blocks";

import styles from "./index.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Main;
