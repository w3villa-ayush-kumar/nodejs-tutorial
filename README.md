# Introduction to Node.js

## Understanding Node.js and Its Role in the Web Development Stack

- **Node.js** is a runtime environment that allows JavaScript to run outside the browser.
- It is commonly used for building **backend services**, **APIs**, **real-time applications**, and **microservices**.
- Fits well in the **full-stack JavaScript** ecosystem (Frontend + Backend using JS).

## What is Node.js?

- Built on **Chrome's V8 JavaScript engine**.
- Uses **JavaScript** to write server-side code.
- Designed to handle **asynchronous**, **I/O-heavy** operations efficiently.

## Benefits of Using Node.js

- **Fast performance** (V8 engine)
- **Non-blocking, event-driven architecture**
- **Single language** for frontend and backend (JavaScript)
- **Large ecosystem** via npm (Node Package Manager)
- **Scalable** and suitable for real-time apps (chat, streaming, dashboards)

## Overview of Node.js Features

- Asynchronous and non-blocking I/O
- Event-driven architecture
- Built-in modules (fs, http, path, os, etc.)
- Cross-platform support (Windows, macOS, Linux)
- npm for dependency management

## Understanding Event-Driven, Non-Blocking Architecture

- **Event-driven**: Code responds to events (requests, timers, file reads).
- **Non-blocking**: Long-running tasks do not block the main thread.
- Uses an **event loop** to manage concurrent operations efficiently.

Example:

```js
console.log("Start");
setTimeout(() => {
  console.log("Async task");
}, 1000);
console.log("End");
```

## Setting Up the Development Environment

### 1. Install Node.js

- Download from the official website: [https://nodejs.org](https://nodejs.org)
- Install **LTS (Long Term Support)** version (recommended).

### 2. Verify Installation

```bash
node -v
npm -v
```

### 3. npm (Node Package Manager)

- Comes bundled with Node.js
- Used to install and manage project dependencies

### 4. IDE / Code Editor

- Recommended: **VS Code**
- Useful extensions: ESLint, Prettier, Node.js snippets

## Basic JavaScript Syntax (Quick Overview)

```js
// Variables
const name = "Node.js";

// Function
function greet() {
  console.log("Hello, " + name);
}

// Call function
greet();
```

## Installing Node.js and Initial Setup Summary

- Install Node.js (LTS)
- Verify using `node -v` and `npm -v`
- Choose an IDE (VS Code)
- Ready to create and run Node.js applications

# JavaScript Fundamentals (for Node.js)

## Variables, Data Types, and Operators

### Variables

- `var` (function-scoped, avoid using)
- `let` (block-scoped, reassignable)
- `const` (block-scoped, cannot be reassigned)

```js
let age = 25;
const name = "Ayush";
```

### Data Types

- Primitive: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Non-primitive: `object`, `array`, `function`

```js
const isActive = true;
const score = 99.5;
const user = { id: 1, role: "admin" };
```

### Operators

- Arithmetic: `+ - * / %`
- Comparison: `== === != !== > <`
- Logical: `&& || !`
- Assignment: `= += -=`

## Control Flow

### if-else Statements

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Loops

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

while (true) {
  break;
}
```

## Functions and Scope

- Functions encapsulate reusable logic
- Scope determines variable accessibility (global, function, block)

```js
function add(a, b) {
  return a + b;
}
```

## Arrays and Objects

### Arrays

```js
const items = ["apple", "banana", "mango"];
items.push("orange");
```

### Objects

```js
const user = {
  name: "Ayush",
  age: 25,
};
```

## Asynchronous Programming with Callbacks

- Used for handling async operations (I/O, timers)
- Can lead to **callback hell** if nested excessively

```js
setTimeout(() => {
  console.log("Executed later");
}, 1000);
```

## Essential JavaScript Concepts (Quick Review)

- Variables and data types store data
- Operators perform operations
- Conditionals control logic flow
- Loops repeat tasks
- Functions organize and reuse code

## Advanced JavaScript Features

### Arrow Functions

```js
const greet = (name) => `Hello ${name}`;
```

### Promises

```js
const fetchData = () => {
  return new Promise((resolve) => {
    resolve("Data received");
  });
};
```

### async / await

```js
async function getData() {
  const result = await fetchData();
  console.log(result);
}
```

### Modules (ES Style)

```js
export const PI = 3.14;
```

## Modules in Node.js (CommonJS)

- Default module system in Node.js
- Uses `require` and `module.exports`

```js
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const math = require("./math");
console.log(math.add(2, 3));
```

## npm – Node Package Manager

- Used to install and manage dependencies
- Comes bundled with Node.js

### Common Commands

```bash
npm init -y
npm install express
npm uninstall express
```

- `package.json` tracks project metadata and dependencies

# Events and Callbacks in Node.js

## What are Events?

- **Events** represent actions or occurrences in the system.
- Examples: HTTP request received, file read completed, timer finished.
- Node.js uses an **event-driven architecture** to handle async operations.

## Event-Driven Programming in Node.js

- Code listens for events and executes handlers when events occur.
- Central to Node.js performance and scalability.
- Powered by the **Event Loop**.

## Using Events in Node.js

- Node.js provides the built-in **`events`** module.
- The `EventEmitter` class is used to create and handle events.

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listen to an event
emitter.on("greet", () => {
  console.log("Hello from event");
});

// Emit an event
emitter.emit("greet");
```

### Common EventEmitter Methods

- `on(event, listener)` – Register an event listener
- `emit(event, data)` – Trigger an event
- `once(event, listener)` – Listen only once
- `removeListener(event, listener)` – Remove a listener

## What are Callbacks?

- A **callback** is a function passed as an argument to another function.
- Executed **after** a task completes.
- Commonly used for asynchronous operations.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
```

## Callbacks in Node.js

- Widely used in core APIs (fs, timers, network requests).
- Error-first callback pattern is standard.

### Error-First Callback Pattern

```js
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

- First parameter: `error`
- Second parameter: `result`

## Events vs Callbacks (Quick Comparison)

- **Callbacks**: Handle completion of a single async task
- **Events**: Handle multiple occurrences over time
- Events are better for **continuous or repeated actions**

## Summary

- Events enable event-driven programming using `EventEmitter`
- Callbacks handle asynchronous execution
- Both are core concepts in Node.js async architecture
