import React, { useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import { WindowContainer } from "./DonationWindow.style";

const DonationWindow = (props) => {
  const totalDonation = props.totalDonation;
  const setTotalDonation = props.setTotalDonation;
  const backers = props.backers;
  const setBackers = props.setBackers;

  // Sets the donation amount from the input field.
  const [donationAmount, setDonationAmount] = useState("");

  // Checks to see if there is a vaild donation amount on submission and if there is, add that to the total donation and increment the backers.
  const submitDonation = async (e) => {
    e.preventDefault();
    if (backers && Number(donationAmount) >= 5) {
      setBackers(backers + 1);
      await setTotalDonation(totalDonation + Number(donationAmount));
      setDonationAmount("");
      alert("Thank you for your donation!");
    } else if (Number(donationAmount) >= 5) {
      setBackers(1);
      await setTotalDonation(totalDonation + Number(donationAmount));
      setDonationAmount("");
      alert("Thank you for your donation!");
    } else if (Number(donationAmount) < 5) {
      alert("Donations must be $5 or higher");
    } else if (!donationAmount) {
      alert("Please enter a donation amount");
    }
  };

  return (
    <WindowContainer>
      <ProgressBar totalDonation={totalDonation} />
      <article>
        <h1>Only four days left to fund this project</h1>
        {backers && (
          <p>
            Join the <strong>{backers}</strong> other donors who have already
            supported this project.
          </p>
        )}
        {backers < 1 && (
          <p>
            Be the <strong>first</strong> backer to support this project!
          </p>
        )}
        <form onSubmit={submitDonation}>
          <div>
            <label htmlFor="donationInput">Donation Amount</label>
            <span>$</span>
            <input
              type="number"
              id="donationInput"
              placeholder="Enter donation"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            ></input>
          </div>
          <button type="submit" value="DONATE">
            Give Now
          </button>
        </form>
        {Number(donationAmount) < 5 && donationAmount ? (
          <p className="invalid">*Donations must be $5 or higher</p>
        ) : (
          <></>
        )}
      </article>
    </WindowContainer>
  );
};

export default DonationWindow;
