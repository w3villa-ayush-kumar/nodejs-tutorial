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

# Node.js Modules and npm

## What are Modules?

- A **module** is a reusable piece of code.
- Helps keep code **organized**, **maintainable**, and **scalable**.
- Each file in Node.js is treated as a separate module.

## How Modules Work in Node.js

- Node.js uses the **CommonJS** module system by default.
- Uses `require()` to import modules.
- Uses `module.exports` to export code.

## Creating and Using Custom Modules

### Creating a Module

```js
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### Using the Module

```js
// app.js
const add = require("./math");
console.log(add(2, 3));
```

## Built-in Modules (Reference)

Node.js provides many built-in modules without installation:

- `fs` – File system operations
- `http` – Create web servers
- `path` – Handle file paths
- `os` – System-related information
- `events` – Event-driven programming

Example:

```js
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello Node");
```

## npm (Node Package Manager)

- Comes bundled with Node.js
- Used to install, update, and manage dependencies
- Stores dependency info in `package.json`

### Common npm Commands

```bash
npm init -y
npm install package-name
npm uninstall package-name
npm install --save-dev package-name
```

## Using Third-Party Libraries from npm

### lodash (utility functions)

```js
const _ = require("lodash");
console.log(_.chunk([1, 2, 3, 4], 2));
```

### axios (HTTP requests)

```js
const axios = require("axios");
axios.get("https://api.example.com/data").then((res) => console.log(res.data));
```

### joi (data validation)

```js
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
});
```

### moment (date handling)

```js
const moment = require("moment");
console.log(moment().format("YYYY-MM-DD"));
```

### async (async utilities)

```js
const async = require("async");
```

### dotenv (environment variables)

```js
require("dotenv").config();
console.log(process.env.PORT);
```

### nodemon (development tool)

- Automatically restarts server on file changes
- Installed as a dev dependency

```bash
npm install nodemon --save-dev
```

## Summary

- Modules help structure Node.js applications
- Built-in modules come with Node.js
- npm provides access to thousands of third-party packages
- Third-party libraries speed up development

# Express.js Framework

## What is Express?

- **Express.js** is a fast, minimal, and flexible web framework for Node.js.
- Used to build **web applications** and **RESTful APIs**.
- Sits on top of Node.js and simplifies server-side development.

## Introduction to Express.js and Its Features

- Simple routing system
- Middleware-based architecture
- Easy request and response handling
- Supports REST APIs
- Large ecosystem and community support

## Creating a Basic Express Application

### Install Express

```bash
npm install express
```

### Basic Server Setup

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Handling Routes and HTTP Methods

- Routes define how the app responds to client requests
- Common HTTP methods: `GET`, `POST`, `PUT`, `DELETE`

```js
app.get("/users", (req, res) => {
  res.json({ users: [] });
});

app.post("/users", (req, res) => {
  res.send("User created");
});
```

## Request and Response Objects

- `req` (Request): contains request data (params, query, body, headers)
- `res` (Response): used to send data back to the client

```js
app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ userId: id });
});
```

## Middleware Concepts

- Middleware functions run **between request and response**
- Can modify `req` and `res`
- Can end request-response cycle or pass control

### Common Uses of Middleware

- Logging
- Authentication & authorization
- Validation
- Parsing request bodies

### Example Middleware

```js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

## Built-in Middleware

```js
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
```

## Building RESTful APIs with Express

- Uses routes + HTTP methods
- Returns JSON responses

```js
app.get("/api/products", (req, res) => {
  res.json([{ id: 1, name: "Phone" }]);
});
```

## Authentication and Authorization Using Middleware

- Authentication: Verify user identity
- Authorization: Check user permissions
- Common approach: **JWT (JSON Web Token)**

### Auth Middleware Example (Concept)

```js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Access denied");
  next();
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Protected route");
});
```

> JWT implementation details are covered in **Topic 7**.

## Summary

- Express simplifies Node.js server development
- Routing and middleware are core concepts
- Ideal for building REST APIs
- Middleware enables authentication, validation, and logging

# Database Integration with Node.js

## What is a Database?

- A **database** stores, organizes, and manages application data.
- Used to persist data beyond application runtime.
- Common databases with Node.js: **MongoDB** and **MySQL**.

## MongoDB vs MySQL

### MongoDB

- **NoSQL**, document-based database
- Stores data in **JSON-like documents**
- Schema-flexible
- Best for rapidly changing data structures

### MySQL

- **SQL**, relational database
- Stores data in **tables with rows and columns**
- Fixed schema
- Best for structured and relational data

## Using Databases with Node.js

- Node.js connects to databases using **drivers** or **ORM/ODM libraries**.
- Enables data storage, retrieval, and manipulation from applications.

## Connecting Node.js to MongoDB

### Using MongoDB Driver / Mongoose (ODM)

```bash
npm install mongoose
```

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/appdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
```

## Connecting Node.js to MySQL

### Using MySQL Driver

```bash
npm install mysql2
```

```js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "appdb",
});

connection.connect();
```

## Database Drivers and ORMs / ODMs

- **Drivers**: Low-level database communication

  - Examples: `mysql2`, `mongodb`

- **ORM/ODM**: High-level abstraction over database

  - MongoDB: **Mongoose** (ODM)
  - MySQL: **Sequelize**, **TypeORM** (ORM)

## Querying and Manipulating Data

### MongoDB (Mongoose Example)

```js
User.find({ role: "admin" });
```

### MySQL (Query Example)

```js
connection.query("SELECT * FROM users", (err, results) => {
  console.log(results);
});
```

## CRUD Operations

- **Create** – Insert data
- **Read** – Fetch data
- **Update** – Modify data
- **Delete** – Remove data

### Example (MongoDB)

```js
User.create({ name: "Ayush" });
User.findById(id);
User.updateOne({ _id: id }, { name: "Updated" });
User.deleteOne({ _id: id });
```

## Data Validation and Sanitization

- Prevents invalid or malicious data
- Can be handled at:

  - Application level
  - Database schema level

### Example with Mongoose

```js
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
});
```

### Using Validation Libraries

- `joi`
- `express-validator`

# Authentication and Authorization in Node.js

## Authentication vs Authorization

- **Authentication**: Verifies _who_ the user is (login).
- **Authorization**: Determines _what_ the user can access (permissions/roles).

## Authentication Libraries

- **Passport.js**: Popular authentication middleware for Node.js.
- Supports strategies like **local**, **JWT**, **OAuth (Google, GitHub)**.

### Passport.js (Concept)

- Uses strategies to authenticate users.
- Integrates with sessions or JWT.

## Managing Sessions and Cookies

- **Sessions** store user state on the server.
- **Cookies** store session identifiers on the client.

```bash
npm install express-session
```

```js
const session = require("express-session");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
```

- Suitable for traditional web apps.
- Less ideal for stateless APIs.

## JSON Web Tokens (JWT)

### Understanding JWT

- JWT is a **stateless authentication** mechanism.
- Token contains encoded user data and is signed.
- Commonly sent in `Authorization` header.

Structure: `header.payload.signature`

## Implementing JWT-based Authentication

### Install Dependencies

```bash
npm install jsonwebtoken
```

### Generate JWT (Login)

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: 1, role: "admin" }, "secretKey", {
  expiresIn: "1h",
});
```

## Securing API Endpoints Using JWT

### JWT Authentication Middleware

```js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Access denied");

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
}
```

```js
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json(req.user);
});
```

## Role-Based Access Control (RBAC)

- Restricts access based on user roles (admin, user, etc.)

```js
function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
}
```

```js
app.delete("/api/admin", authMiddleware, authorizeRole("admin"), (req, res) => {
  res.send("Admin access granted");
});
```

## Passport.js vs JWT (Quick Comparison)

- **Passport + Sessions**: Stateful, server-managed
- **JWT**: Stateless, scalable, ideal for APIs
