import React from "react";
import {
  NeededNotification,
  FundedNotification,
} from "./NotificationBox.style";

const NotificationBox = (props) => {
  const totalDonation = props.totalDonation;
  const neededDonation: number = 5000 - totalDonation;

  return (
    <>
      {totalDonation < 5000 ? (
        <NeededNotification>
          <sup>$</sup>
          <strong>{neededDonation}</strong>
          &nbsp;still needed to fund this project
        </NeededNotification>
      ) : (
        <FundedNotification>
          This project was fully funded with a total of&nbsp;
          <sup>$</sup>
          <strong>{totalDonation}</strong>
        </FundedNotification>
      )}
    </>
  );
};

export default NotificationBox;
