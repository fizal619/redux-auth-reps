# Redux Auth Boilerplate

This is a sample of how to implement JWT authentication in React and [Redux](https://github.com/rackt/redux) apps. It uses Auth0's [NodeJS JWT Authentication Sample](https://github.com/auth0/nodejs-jwt-authentication-sample) to authenticate users and retrieve quotes from a protected endpoint.

The sample is well-informed by the official [Redux examples](https://github.com/rackt/redux/tree/master/examples).

## Installation

Clone the repo and run the installation commands, each in a new terminal window.

```bash
# Get the server submodule
git submodule update --init

# Install deps in the project root and in the server directory
npm install
cd server && npm install
cd ..

# Run the server
npm run server

# New terminal window
npm start
```

The app will be served at `localhost:3000`.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
