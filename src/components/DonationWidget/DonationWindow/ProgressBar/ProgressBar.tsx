import React from "react";
import { BackgroundBar, ForegroundBar } from "./ProgressBar.style";

const ProgressBar = (props) => {
  const totalDonation: number = props.totalDonation / 50;

  return (
    <BackgroundBar>
      <ForegroundBar totalDonation={totalDonation}></ForegroundBar>
    </BackgroundBar>
  );
};

export default ProgressBar;
