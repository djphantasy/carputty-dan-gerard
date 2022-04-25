import React, { useState } from "react";
import DonationWindow from "./DonationWindow/DonationWindow";
import NotificationBox from "./NotificationBox/NotificationBox";

const DonationWidget: React.FC = () => {
  const [totalDonation, setTotalDonation] = useState(0);
  const [backers, setBackers] = useState();

  return (
    <main>
      <NotificationBox totalDonation={totalDonation} />
      <DonationWindow
        totalDonation={totalDonation}
        setTotalDonation={setTotalDonation}
        backers={backers}
        setBackers={setBackers}
      />
    </main>
  );
};

export default DonationWidget;
