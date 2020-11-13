# Mail_Out

## Project Overview

Mail_Out is a MERN fullstack web app that helps companies to create email campaigns and get customer feedback in a simple 'yes/no' format, the feedbacks are recorded and summarized in the company dashboard.  Users buy credits to their account which is used on the email service which they send. 

## Tech Stack
As implied earlier, the tech stack mainly comprises of MongoDB, Express, React, and Node.js and deployed to Heroku. Other services include Google OAuth for authentication, Stripe for payments, and SendGrid for mailing out survey campaigns. [Materialize CSS](https://materializecss.com/) for minor styling.

## Results - Publicly hosted Site
The app is already deployed on Heroku [here](https://mailout.herokuapp.com/).  
PS : Use credit card number "4242 4242 4242 4242" and CVC security code with future expiration date to test payment.

## Needed Tools

- free developers accounts from [Stripe](https://stripe.com/docs) for handling (test) payments, [Heroku](https://www.heroku.com/) for cloud hosting, [MongoDB](https://www.mongodb.com/) for backend database hosting, [sendGrid](https://sendgrid.com/) for sending of email campaigns, and Google for OAuth authentication (e.g. [latest developers link](https://developers.google.com/identity/protocols/oauth2).  
 
## Available Scripts
In the project top level 'server' directory, the following script will run the app in development mode by initiating both the client and backend server:\
  npm run dev

## Install
```zsh
npm install && npm install --prefix client
```
## Development Configuration

Create a file "dev.js" in /config and paste the following configuration keys with appropriate values.
```javascript
module.exports = {
  googleClientID: 'YOUR_GOOGLE_PLUS_ID',
  googleClientSecret: 'YOUR_GOOGLE_PLUS_SECRET_KEY',
  mongoURI:'YOUR_MONGODB_URI',
  cookieKey:'YOUR_COOKIE_KEY',
  stripePublicKey: 'YOUR_STRIPE_PUBLIC_KEY',
  stripeSecretKey: 'YOUR_STRIPE_SECRET_KEY',
  sendGridKey: 'YOUR_SEND_GRID_API_KEY',
  redirectDomain:'YOUR_LOCAL_DEVELOPMENT_SERVER_ADDRESS'
};
```
## Start App

 To start the app, run the following command.
```zsh
npm run dev
```