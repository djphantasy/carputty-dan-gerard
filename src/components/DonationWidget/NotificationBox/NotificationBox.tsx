import React from "react";
import {
  NotificationContainer,
  NeededNotification,
  FundedNotification,
} from "./NotificationBox.style";

const NotificationBox = (props) => {
  const totalDonation = props.totalDonation;
  const neededDonation: number = 5000 - totalDonation;

  return (
    <NotificationContainer>
      {totalDonation < 5000 ? (
        <NeededNotification>
          <p>
          <sup>$</sup>
          <strong>{neededDonation}</strong>
          &nbsp;still needed to fund this project
          </p>
        </NeededNotification>
      ) : (
        <FundedNotification>
          <p>
          This project was fully funded with a total of&nbsp;
          <sup>$</sup>
          <strong>{totalDonation}</strong>
          </p>
        </FundedNotification>
      )}
    </NotificationContainer>
  );
};

export default NotificationBox;
