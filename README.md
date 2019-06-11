# Intro
This project is meant to be an example of how to implement an authentication system on the server and on the client. It is also meant to be used as an example of how to deploy your server code to a public production server. This git repo has a folder for client and server but they are meant to be viewed as two seperate project. They are in the same git repo for convienence sake. Pretend that the client folder has no idea the server folder exists and visa versa. The client folder is a normal create-react-app project. The server folder has the typical MVC code setup with all the boilerplate code for authentication.

# .env
Sometimes your code needs to be provided sensitive information. In our server, we need the url to our mongodb database which includes the username and password. Our authentication code needs a SECRET value to be the key for the encryption and decryption. This information should not be public but if we include it in our code which is part of a git repo, what will happen when you push it to github? This sensitive information will be viewable by the world. We need to organize our code such that all private information is in one specific file. The rest of the code can then retrieve the information from this file. This file should then not be included in the git repo. How do you tell git to ignore certain files? What happens when someone clones your repo and needs that file?


# Setup
* fork and clone
* do a `npm i` in each folder seperately (/client and /server)
* in the /client folder do a npm start
* in the /server folder do a nodemon index.js
* create an .env file in /server and put in your custom information

# Database
* Make sure you are running mongoDB or using Mlab
* Make sure you have a database setup called “authentication-practice” or similiar
* put your database url in the env file

# Client

### Sign In
* Create a component called SignIn
* Use SignUp as an example
* Make sure the button says Sign In 
* It doesn’t need the confirm text box
* It needs a prop called onSignIn that is a function
* In handleSubmit, call onSignIn
* in App.js, assign the handleSignIn function to the onSignIn prop of SignUpSignIn component
* In SignUpSignIn.js assign the onSignIn prop of SignIn , (do the same things as onSignUp)
* Use the SignIn component in the SignUpSignIn component

### Implement handleSignIn in App.js
* Need to do a fetch post to /api/sessions 
* Code will probably almost the same as handleSignUp
* In the first fetch `then` there is a parameter for the `response`
* this object has a property called status
* If the value of status is 401 it means the login was invalid, setState for an error message
* Else just return JSON as normal

### Secured Components
* Create 3 class components it doesn’t matter what they are 
* componentDidMount should use fetch to make a GET request to a secured path that you create
* In App.js renderApp, add routes for them these components

### App
* Fix App.js handleSignUp
    * It is common practice to make sure you know what password you are typing in by having the user type it in twice and ensure they typed the same thing each time
    * It is not checking whether password and confirm password are the same. Implement this logic and show an error message.
    * The promise callback function is not handling the error of if you sign up with a  username that already exists
    * Check whether an error message was returned from the server and show it.

### TopNavbar.js
* Add 3 more Links for the secured components routes
* The component is not using the property showNavItems
    * Use this property to determine whether to show the Nav Items, only show the secured routes if showNavItems === true
    * The sign out should always be shown
### Build
* Make sure you have everything working locally as you intend
* Do a `npm run build`
* Copy the contents of /client/build into /server/public. Don't copy the actual /build folder into the /server/public folder

# Server
* Create 3 secure routes on the server
* It doesn’t matter what they return
* If the request is not authenticated then the route should not be executed at it should return unauthorized.
* Make a fetch get request to these routes in the secure components

# Extra Credit
* Implement the popular feature of telling the user if a username is available as soon as they type it in

# Points
* Sign In works - 25pts
* Confirm password works - 25pts
* Existing username error works - 25pts
* Secure components - 25pts
* Secure routes - 25pts
