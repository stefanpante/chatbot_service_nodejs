# Chatbot Smart Widget BFF (Node)

This is a Node.js backend service library to create a BFF service for the Chatbot Smart Widget. The widget provides a chat interface.

There is a **demo service**, see below for instructions on running it.

## How to use

### Installing

Copy the .npmrc file from this repo to your application's folder.

Then install (you will need to be on the digipolis network):

```sh
> npm install @acpaas-ui-widgets/nodejs-chatbot-service
```

### Using

Express example:

```js
const express = require('express');
const app = express()
const chatbotService = require('@acpaas-ui-widgets/nodejs-chatbot-service');
const controller = chatbotService.createController({
  accessToken: <ACCESS_TOKEN> (you can find this in the chatbot interface under 'Instellingen'),
  chatbot: <CHATBOT> the Id of the chatbot you want to address,
  chatbotenv: <CHATBOT_ENV> test | production,
  serviceUrl: <SERVICEURL> endpoint (api-store),
});
app.get('/api/chatbot', controller);
app.listen(3000);
```

## Run the demo app

Create a .env file containing:

```sh
ACCESS_TOKEN=
CHATBOT=
CHATBOT_ENV=
PORT=(optional, defaults to 3000)
SERVICEURL=
TOKEN=
```

Obtain the client id and client secret by creating a contract on the mprofiel-admin service on [api-store-o.antwerpen.be](https://api-store-o.antwerpen.be).

(Remove the -o extension in the URL's to use the production api.)

Run the service:

```sh
> npm install
> npm start
```

## Service Specification

```sh
POST: /chats/{botId}/message?access_token={access_token}
{
  "message": "Hello World", 
  "session_id": "<your session id>",
  "type": "message",
  "send": "true"
}
```
- **message:** Your message to the bot,
- **session_id:** The chatsession
- **type:** message
- **send:** true

An [example swagger description](swagger.yml) is included.

## Contributing

We welcome your bug reports and pull requests.

Please see our [contribution guide](CONTRIBUTING.md).

## License

This project is published under the [MIT license](LICENSE.md).
