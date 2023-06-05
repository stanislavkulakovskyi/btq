import React from "react";
import Lottie from "lottie-react";

import bgAnimation from "../../../../../assets/lottie/hero_background.json";
import bgIllustration from "../../../../../assets/images/bg_illustration.png";
import { PLUS_STYLES_BY_INDEX } from "../../../../../utils/constants/layoutBg";

import { SvgIcon } from "../../../../base";

import styles from "./index.module.scss";

const Background = () => {
  const renderPlusIcons = () => {
    return Array(4)
      .fill(true)
      .map((_, index) => (
        <SvgIcon
          key={`plus-${index}`}
          type="plus"
          className={styles.plus}
          style={PLUS_STYLES_BY_INDEX[index]}
        />
      ));
  };

  return (
    <div className={styles.container}>
      <Lottie
        animationData={bgAnimation}
        className={styles.animation}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />

      <div className={styles.blur} />

      <img
        src={bgIllustration}
        alt="belletriq"
        className={styles.bgIllustration}
      />

      {renderPlusIcons()}
    </div>
  );
};

export default Background;
