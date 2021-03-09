# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## project compplete details follows here:

  1. clone the project & run npm install which loads all the required librarys for the project
    & just run Command npm start 

    site loads in browser on port 3000 which is default port for react

## Command to start, Run & Build React applications
     
     Note: Use npm prefix to run below commands 
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",

    "start:dev": "env-cmd -f environments/.env.dev react-scripts start",
    "build:dev": "env-cmd -f environments/.env.dev npm run build",

    "start:stage": "env-cmd -f environments/.env.stage react-scripts start",
    "build:stage": "env-cmd -f environments/.env.stage npm run build",

    "start:prod": "env-cmd -f environments/.env.prod react-scripts start",
    "build:prod": "env-cmd -f environments/.env.prod npm run build",
    
    "start:qa": "env-cmd -f environments/.env.testing react-scripts start",
    "build:qa": "env-cmd -f environments/.env.testing npm run build"
  
  ## API calls Handling pre-required things & dependance

     we use axios npm plugin to featch data from our back office

     npm install axios --save

     refer doc here: https://www.npmjs.com/package/axios

 ## Application State Managment is also in built in this application/project
 