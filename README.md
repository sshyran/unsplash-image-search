IMAGE SEARCH APP

###  :green_heart: DESCRIPTION
This app utilizes unsplash API in order to request, retrieve and render images onscreen and offers and option to save these queries. 

###  :green_heart: SAVING QUERIES
A user may choose to save their favourite search results by clicking "SAVE" button in order to view these images at a later time. 
The app uses a REDUX store and collects <i>every</i> query a user submits, so if the query is repeated, even if it is not saved, it will not send a request to the API and instead load it from the store thus saving bandwith and API load. Saved queries are store in a simple array list.

###  :green_heart: GALLERY
Hovering (or clicking on mobile) on images displays the name of the author who took the picture. Their name is a clickable anchor tag that opens into a page with more info of the author. 

###  :green_heart: MODALS
Custom modals pop on scripted events: when query returns no results or when a user wants to save a query (this event can have different outcomes: if the query is saved already, if there was no query or no results have been returned; a modal will appear before a user wants to save an unrecorded query allowing to confirm or cancel the operation). 
A custom progress bar is also present, however during my testing it was only relevant on slow networks. For better or worse I capped my queries at 10 results and generally they are returned and rendered rather instanteneously.
The search progress is split into two episodes: 
  1. fetching query from the API
  2. loading images 

###  :green_heart: USER INTERFACE 
This app is responsive and has slightly different layouts for desktop, tablet (<768px) and mobile (<468px) screens. The favourites/saved queries block becomes hidden on screens with width <768px and a hamburger icon appears next to "SAVE" button thus introducing a more ergonomic, familiar and delightful interface. 
Modals pop up within appropriate blocks, overlaying contents inside with a stylish and fun yellow colour immedialy attracting user's attention. Styled using scss. 


### :green_heart: checkout out the production build live on gitHub pages
https://andriussvilys.github.io/image-search/

OR clone the repository to see the code up close


##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify