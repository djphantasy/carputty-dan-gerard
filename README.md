# Carputty Frontend Coding Challenge for Dan Gerard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## General Directions

Please develop the above design sharing the code how you wish—CodePen, GitHub, Bitbucket or the alike. In doing so, please follow the
following guidelines:

* The total goal for donations is $5,000
* Any given donation cannot be below $5
* Upon receiving a donation, the total still needed, progress bar, and number of donors should all be updated
* Use React to build the component

## Notes

* The Poppins and IBM Flex Sans typefaces may be found on Google Fonts

## Bonus Points

* Use Saas or Emotion as a preprocess for your CSS
* Add active, hover, success, and error states according

## Solution

This app uses create-react-app as a starting point to set up a basic typescript app template. From there, I imported my React component inside of App.tsx. The app makes use of Google Fonts to import the needed Poppins and IBM Flex Sans fonts. I also choose to install the 'styled-components' package as an alternative to Emotion to style my components. Also the number-to-words package was also installed.

### DonationWidget

This component contains the 2 main elements of the app. The NotificationBox aside that states the funding status of the project and the DonationWindow which includes the progress bar, descriptive text, and input form. This component also declares the variables for holding the total donations and the number of project backers.

### NotificationBox

Displays an aside element that tells the user how much is left to fund the project. Once the project has been funded, the aside will change to state how much was funded in total.

### DonationWindow

Component contains a heading that states how many days are left to fund the project. Gives a call to action below the heading that displays the total number of backers. If there are currently no backers, a different call to action is displayed. Form with a single, number input field to indicate the donation amount. Form is submitted on enter key or submit button press. If there is a donation amount over $5 then the donation is added to the totalDonation, the backers are incremented, and an alert message is shown. If not, an error alert is shown.