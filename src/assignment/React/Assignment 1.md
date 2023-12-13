# React Assignment 1
### What is virtual DOM ?
The virtual DOM is a prgramming concept where an ideal or vitual representation of a UI is kept in memory and synced with real DOM by a library such as React & Vue. In other word we can say, It's a light weight copy of real DOM.  After manipulationg VDOM it only re-renders changed elements which make updates light weight and make performance fast and optomised rather than directly manuplating real DOM. |

### What is SPA ?
SPA stands for Single Page Application, which loads only a single web document and then updates the body content of that single document. It allows us to use a website without reloading the entire page from the server.

### What is difference between class and functional component?
A class component deals with ES6 class features using the extends keyword with the React component. On the other hand, a functional component is declared using a JavaScript function.
- Class components have access to state and use this.state to access the state. In functional components, the useState hook is used to manage state.
- Class components have direct access to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount, whereas functional components use the useEffect hook to control the lifecycle.
- Class components are less readable, while functional components are generally more readable.
- Class components have less reusability as state sharing is limited, while functional components promote more reusability.
- Event handling in class components requires binding, whereas in functional components, events can be handled directly without binding.

### What is State ?
 The State is a built-in object used to contain data or information about the component.

### What is JSX ?
JSX stands for Java Script Syntex Extension. It allow us to write HTML with Java Script. It convert HTML tags to react element. Both are same but but JSX is well supported by development tools, providing feature like syntex highlighting , autocompletion and imporoved error messages.

### What is package.json ? 
package.json keeps information about a project, such as its name, version, dependencies, etc. This file is provided by NPM and helps identify and manage project dependencies.

###  What is the Difference between react and react native? Which one is library or framework?
React is a front-end library built on JavaScript, popular for building single-page applications or websites. React Native is a framework for building cross-platform mobile applications. React is a library, and React Native is a framework.

###  What is the package name you are using for routing ?
Currently I'm using react router dom v6.

