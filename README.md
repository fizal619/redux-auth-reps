# Redux-Auth Reps

Now that we had a great lesson on authenticating our redux powered clients. It's time to do some reps to make sure we can flex our redux skills. Remember: no pain no gain! 

![reps](https://media.giphy.com/media/11BVtijgIjigh2/giphy.gif)

## Setup

1. Clone this repository. 
2. `git submodule update --init`: This makes sure the `server` directory is up to date. It should look like the diagram below.  
3. Next `cd server` then `npm install` and `npm start`.
4. Now open a new terminal tab or window and make sure you're in the root of the project directory (not the `server` folder).
5. `npm install`
6. `curl --data "username=hello&password=world&extra=welcome_home" http://localhost:3001/users`
7. `npm start` and the app should be live at `localhost:3000`. 


```
.
├── actions.js
├── components
│   ├── Login.js
│   ├── Logout.js
│   ├── Navbar.js
│   └── Quotes.js
├── containers
│   └── App.js
├── index.html
├── index.js
├── LICENSE
├── middleware
│   └── api.js
├── package.json
├── README.md
├── reducers.js
├── server
│   ├── anonymous-routes.js
│   ├── config.json
│   ├── package.json
│   ├── protected-routes.js
│   ├── quoter.js
│   ├── quotes.json
│   ├── README.md
│   ├── server.js
│   ├── statusError.js
│   └── user-routes.js
├── server.js
├── SUMMARY.md
└── webpack.config.js

```


## Outline

So for this exercise there are 2 major goals:

* To implement a spinner for while `isFetching` is true. 
* To implement an account signup feature.

Let's get started!

## User Stories:

####As a **user** I should see **a spinner** while I'm **waiting** for the application to **log me in**.

![spinner](https://hitch.ly/assets/images/spinner.gif)

In class, Jason went over what this logic might look like. We already implemented the actions that this would rely on, the only thing left to do would be to consume the `prop` we had set up. Here are some tips to consider:<br/>
	
  * Look at how each component utilizes the `mapStateToProps`.<br/> 
	* The spinner should be its own component.<br/>
	* You can have the parent component of the spinner handle whether or not it is visible, a simple `if statement` can decide this. <br/>
	* Where you put it, and how you choose to display it is totally up to you.<br/> 
	* Feel free to use the gif above as your spinner. <br/>

####As a **user** I should be able to **sign up** so I can get the secret quote.

![sign-up](https://media.giphy.com/media/3orif3HlX3i4fDdqCY/giphy.gif)

Can you imagine putting this app online and having to make each user with that `curl` command? What is this? The 90?!

Let's implement a sign-up component to take care of this. 

* It's pretty much a clone of the login component and its redux reducer(s) and action(s). However it would send a `POST` request to the route in the command. 
* Jason suggested that it can swap with the login component when a button is clicked. Though that's one of many ways of presenting it. (I personally love modals.) 
* For a refresher, below is the curl command we used when setting up the application.

```
curl --data "username=hello&password=world&extra=welcome_home" http://localhost:3001/users
```

* Notice it sends 3 items to the `/users` route. `username`, `password` & `extra`. 

* After you've done this, we wouldn't need any retro curl commands to sign up for the app. Just kidding, curl is awesome. 



## Wrap-up

At the end of this exercise you should have a working sign-up feature, however you chose to implement it, as well as a spinner that shows itself when `isFetching` is true. 
 
 >HAPPY CODING!
