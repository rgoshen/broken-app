### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
	1. Callbacks
	2. Promises
	3. Async/Await

- What is a Promise?

	- A Promise is some kind will be returned at some point in the future.  There is no guarantee of exactly when the operation will complete and the result will be returned, but there is a guarantee that when the result is available, or the promise fails, the code you provide will be executed in order to do something else with a successful result, or to gracefully handle a failure case.

- What are the differences between an async function and a regular function?

	- Aside from the obvious `Async` keyword, an async function will execute it's code asynchronously and return a promise (may return resolved or rejected) while the rest of the code continues on.  A regular function exceutes its code sequentially.

- What is the difference between Node.js and Express.js?

	- Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. NodeJS is not a framework and it’s not a programming language. Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

- What is the error-first callback pattern?

	- The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.

- What is middleware?

	- Middleware is software that provides common services and capabilities to applications outside of what’s offered by the operating system. Data management, application services, messaging, authentication, and API management are all commonly handled by middleware. Middleware helps developers build applications more efficiently. It acts like the connective tissue between applications, data, and users.

- What does the `next` function do?

	- The `next` function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

	- Function is not reuseable.
	- Each request must wait for the previous request before starting
	- Each request is independent and can really slow down the application
	- No error handling
	- Should refactor to handle parallel requests and catch errors
