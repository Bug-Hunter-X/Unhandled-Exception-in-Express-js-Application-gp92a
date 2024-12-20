# Unhandled Exception in Express.js Application

This repository demonstrates a common error in Express.js applications: unhandled exceptions.  The `bug.js` file contains code that throws an error without proper handling, causing the server to crash.  The `bugSolution.js` file provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the server with the bug.
5. Observe that the server crashes when you make a request to the `/` route.
6. Run `node bugSolution.js` to start the server with the solution.
7. Observe that the server handles the error gracefully and responds with an error message.

## Solution

The solution involves using a `try...catch` block to handle potential errors and sending a proper error response to the client.