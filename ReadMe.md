#namaste react
npm- manages packages install packages
package .json configuration for npm
why do we need it?
package is also kown a dependencies
npm will take care of ehat is the version of that package
bundlers-basically bundles or packages our app.so that it can be shift to production
we will use parcel bundler

2 dependencies->dev dependencies and normal dependencies
dev dependencies is required when we are developing our app
we are fetching parcel from npm

 "devDependencies": {
    "parcel": "^2.13.3"
  }
  ^->this means parcel will upgrade automatically if in future some upgrade version comes
package json ->is a configuration-it keeps a track of version what is installed in our system.it keeps a approx version

package lock json-> .it locks the version and keeps a record of it.it keeps a track of all the exact versions of all the dependencies

node modules ->is a database it contains actual data of packages or dependencies that our project needs.it contains all the code

if you have package json and package lock json you can recreate  all your node modules so this should  go  inside git
npx means executing a package.we have xecuted parcel
parcel has created  a server for us and hosting app to the server

in cdn we have to make network control but here we have react in node module
import React from "react"  =>> "react" ->this is coming from node modules

npm is used to install a package
npx is used to execute a package

#parcel
-dev build
 -local server
-HMR=>hot module replacement
-File watching algorithm is used by parcel-written in c++
Caching-faster builds
-image optimization
-Minification 
-bundling
-compress
-consistent hashing
-code splitting
-differntial bundling-support older browser
-Diagnostic
-error handling
-https
-tree shaking-removing unused code
prod build-it is highly optimized and can be used for production

<!-- const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);

console.log(parent); -->
<!-- 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
   -->

   jsx is a convention where we merge html and js
   JSX React jsx is not html in JS.HTML like syntax

JSX(transpiled before it reaches JS engine)
transpiled->understand by browser .transpiling is done by -PARCEL-Babel

 JSX=> Babel transpiled to=> .createElement=>ReactElement -JS  object=>HTML element(render)

Babel=>some older browser does not understand ES6.babel transpile ES6 code to a code whic h older browser can understand

//attributes in JSX should be in camel case

/React component
//class Based component -OLD
//functional component-NEW

 # React Functional Component->it is just a normal JS function which return some JSX code


# LECTURE 5


 # TWO TYPES OF EXPORTS/IMPORTS
 # -Default Export/Import

export default component
import Component from "path"

# Named Export/Import

export const Component
import {component} from "path"

react is fast in DOM manipulation and this is the exact problem react is solving.suppose you have to keep your data and UI layer tied with each other then there comes REACT.


  # State Variable->Super Powerful Variable->For that we use React Hooks i.e useState()

  # React Hooks(Normal JS utility function)
  //react hook is a normal JS function given by react.that function has a special power
  useState()-superpowerful state variables in React
  useEffect()

   # Normal JS variables
  // let ListOfRestaurants = []

 # SuperPowerful Variable
  const [ListOfRestaurants,setListOfRestaurant] = useState([])

  so basicaly super powerful variable keeps the Ui in sync with the data layer .if listofRestaurant is a normal variable  and if will update it, UI will not get update .
  as soon as listofrestaurant changes it will automatically refresh our component .this is called render

  # IMPORTANT
  # whenever the state variable updates,React rerenders the component

React will keep your UI sync with data layer.in data layer when you have local state variables.. as soon as data layer updates your UI layer will update. How will it update ? it will update by rendering.


#Reconciliation Algorithm(React Fiber)is a new algorithm which comes in REACT16 .React fibre is a new way of finding div and updating the DOM

Virtual DOM-is representation of a actual DOM
it is a normal JS nested object


Diff Algorithm -it finds out differnece between updated virtual DOM nand previous virtual DOM

suppose on clicking restro cards which are 7(old) and on click they become 3(new) it just find out the difference between virtual DOM and then it actually updates the DOM
  Differnece between 2 HTML code in Tough but between 2 object it is fast  as JS is fast.
  React keeps a track of all this UI ,ALL DOM NODES as virtual DOM
  # React is fast?why?

because react is doing efficient DOM manipulation How? because it has virtual DOM.react can efficiently find out the difference between 2 virtual DOM and can update the UI.







