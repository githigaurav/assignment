# React Assignment  1 
### What is Single Page Application (SPA) ?
SPA stands for Single Page Application, which loads only a single web document and then updates the body content of that single document. It allows us to use a website without reloading the entire page from the server.


### What is DNS and IP Address ?
DNS stand for domain name server. It turns domain name into IP addresses which allow to browser to get website and resources.

IP stands for Internet Protocol. An IP address is a unique address that identifies a device on the internet or a local network. IP

### What Is DOM in JS
DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document.The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

### What is React and why we use React instead of JS
React is a JavaScript library for building user interfaces. We use React instead of plain JS because React provides an efficient way to manipulate the DOM, offers great performance through its virtual DOM, and makes it easy to build reusable UI components.

### What is JSX and why do we use it instead of js?
JSX stands for Java Script Syntex Extension. It allow us to write HTML with Java Script. It convert HTML tags to react element. Both are same but but JSX is well supported by development tools, providing feature like syntex highlighting , autocompletion and imporoved error messages.

### What is package.json ? 
package.json keeps information about a project, such as its name, version, dependencies, etc. This file is provided by NPM and helps identify and manage project dependencies.

###  What is the Difference between react and react native? Which one is library or framework?
React is a front-end library built on JavaScript, popular for building single-page applications or websites. React Native is a framework for building cross-platform mobile applications. React is a library, and React Native is a framework.

### What is difference between class and functional component?
A class component deals with ES6 class features using the extends keyword with the React component. On the other hand, a functional component is declared using a JavaScript function.
- Class components have access to state and use this.state to access the state. In functional components, the useState hook is used to manage state.
- Class components have direct access to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount, whereas functional components use the useEffect hook to control the lifecycle.
- Class components are less readable, while functional components are generally more readable.
- Class components have less reusability as state sharing is limited, while functional components promote more reusability.
- Event handling in class components requires binding, whereas in functional components, events can be handled directly without binding.