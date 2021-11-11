# Mail_Out

## Contents

- [About](#overview)
- [Tech Stack](#stack)
- [Deployment](#deploy)
- [Needed Tools](tools)
- [Development Configuration](#config)
- [Available Scripts](#scripts)
- [Documentation](#documentation)

## About Project <a name = "overview"></a>

Mail_Out is a MERN fullstack web app that helps companies to create email campaigns and get customer feedback in a simple 'yes/no' format, the feedbacks are recorded and summarized in the company dashboard.  Users buy credits to their account which is used on the email service which they send. 

## Tech Stack <a name = "stack"></a>
The tech stack mainly comprises of MongoDB, Express, React, and Node.js and deployed to Heroku. Other services include Google OAuth for authentication, Stripe for payments, and SendGrid for mailing out survey campaigns. [Materialize CSS](https://materializecss.com/) for minor styling.

## Deployment <a name = "deploy"></a>
The app is already deployed on Heroku [here](https://mailout.herokuapp.com/).  
PS : Use credit card number "4242 4242 4242 4242" and CVC security code with future expiration date to test payment.

## Needed Tools <a name = "tools"></a>

- free developers accounts from [Stripe](https://stripe.com/docs) for handling (test) payments, [Heroku](https://www.heroku.com/) for cloud hosting, [MongoDB](https://www.mongodb.com/) for backend database hosting, [sendGrid](https://sendgrid.com/) for sending of email campaigns, and Google for OAuth authentication (e.g. [latest developers link](https://developers.google.com/identity/protocols/oauth2).  
 
## Development Configuration <a name = "config"></a>

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
## Available Scripts <a name = "scripts"></a>

### Install
```zsh
npm install && npm install --prefix client
```

### Run in development mode
In the project top level 'server' directory, the following script will run the app in development mode by initiating both the client and backend server:
To start the app, run the following command.
```zsh
npm run dev
```


## Documentation <a name = "documentation"></a>

### JSON Objects returned by API:

Make sure the right content type like `Content-Type: application/json; charset=utf-8` is correctly returned.

#### Users (for authentication)

```JSON
{
  "user": {
    "googleId": "iefbeiveievbjbevjklmwnn"
  }
}
```
#### User (Object Model)

```JSON
{
  "user": {
    "googleId": "iefbeiveievbjbevjklmwnn",
    "credits": 2
  }
}
```

#### Survey

```JSON
  {
    "title": "customer feedback request",
    "body": "Thank you for the purchase of our service, we would love to get a review from you. ",
    "subject": "Do you love our service and will you recommend it to your friends?",
    "recipients": [{"email": "test@test.com", "responded": true}, {"email": "test2@test.com", "responded": false}],
    "yes": 3,
    "no": 1,
    "_user": "huweffioiq7yufweghokqdwgfuiw",
    "dateSent": "22-10-2020",
    "lastResponded": "22-10-2020"
}
```

#### Recepient 

```JSON
{
	"recipients": [
		{
			"email": "test@test.com",
			"responded": true
		}, 
		{
			"email": "test2@test.com",
			"responded": false
		}
	],
}
```

#### Errors and Status Codes

If a request fails any validations, expect a 422 and errors in the following format:

```JSON
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}
```

##### Other status codes:

401 for Unauthorized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action e.g "Insufficient credits.  Please add credits."

404 for Not found requests, when a resource can't be found to fulfill the request

## Endpoints:

#### Authentication:

`GET "/auth/google",`

No authentication required


#### Logout:

`GET "/api/logout",`

Authentication required


#### View all surveys:

`GET "/api/surveys",`

Authentication required, returns the credits and list surveys of logged in user.


#### Create a new survey:

`POST "/api/surveys",`

Example request body:
```JSON
{
    "title": "customer feedback request",
    "body": "Thank you for the purchase of our service, we would love to get a review from you. ",
    "subject": "Do you love our service and will you recommend it to your friends?",
    "recipients": [{"email": "test@test.com", "responded": true}, {"email": "test2@test.com", "responded": false}],
    "_user": "huweffioiq7yufweghokqdwgfuiw",
    "dateSent": "22-10-2020",
}
```

Authentication required, 1 credit required.

Required fields: `title`, `body`, `subject`, `recepient`, `user`.


#### Recepient gives feedback from email:

`POST "/api/surveys/:surveyId/:choice"`

Example request body:
```JSON
          {
            "_id": "surveyId",
            "recipients": {
              "$elemMatch": { "email": "email@email.com", "responded": false },
            },
          },
          {
            "$inc": { "choice": 1 },
            "$set": { "recipients.$.responded": true },
            "lastResponded": "20-10-2020",
          }
```
No authentication required.


#### Payment Endpoint For Buying Credits

`POST "/api/stripe"`

Example request body:
```JSON
		{
            "amount": 500,
            "currency": "usd",
            "source": "tok_visa", //prev req.body.id
            "description": "5 survey credits for $5"
        }
```
Authentication required.

Required fields: `amount`, `currency`, `source`, `description`

