
# 1. What is an API?

API stands for **Application Programming Interface**.

Think of it like a waiter in a restaurant:

* Client (Customer) → Requests food
* Waiter (API) → Takes request
* Kitchen (Server) → Prepares food
* Waiter (API) → Returns food

Example:

```javascript
Browser ---> API ---> Database
Browser <--- API <--- Database
```

When you open Instagram:

1. Browser sends request
2. API fetches data from database
3. API returns posts, likes, comments

---

# 2. What is REST?

REST stands for:

**Representational State Transfer**

It's a set of rules for building APIs.

REST tells us:

* How URLs should look
* How requests should be sent
* Which HTTP methods to use
* How responses should be returned

---

# 3. What is a RESTful API?

An API that follows REST principles is called a RESTful API.

Example:

Imagine a User Management System.

Bad URL:

```text
/getAllUsers
/createNewUser
/deleteUserById
```

RESTful URLs:

```text
GET    /users
POST   /users
DELETE /users/1
PUT    /users/1
```

Notice:

* URL represents a resource
* HTTP Method represents action

---

# 4. Resource

A Resource is any data.

Examples:

```text
Users
Products
Orders
Books
Students
```

Resource URLs:

```text
/users
/products
/orders
/books
```

---

# 5. HTTP Methods

These are the most important.

---

## GET

Used to fetch data.

```http
GET /users
```

Response:

```json
[
  {
    "id": 1,
    "name": "Prince"
  }
]
```

Meaning:

"Give me all users"

---

## POST

Used to create data.

```http
POST /users
```

Body:

```json
{
  "name": "Prince"
}
```

Response:

```json
{
  "id": 1,
  "name": "Prince"
}
```

Meaning:

"Create a new user"

---

## PUT

Used to replace/update an entire resource.

```http
PUT /users/1
```

Body:

```json
{
  "name": "Prince Singh"
}
```

Meaning:

"Update user completely"

---

## PATCH

Used for partial update.

```http
PATCH /users/1
```

Body:

```json
{
  "name": "Prince"
}
```

Meaning:

"Update only specified fields"

---

## DELETE

Used to delete data.

```http
DELETE /users/1
```

Meaning:

"Delete user 1"

---

# 6. CRUD Operations

REST APIs usually map to CRUD.

| CRUD   | HTTP Method |
| ------ | ----------- |
| Create | POST        |
| Read   | GET         |
| Update | PUT/PATCH   |
| Delete | DELETE      |

Example:

```text
POST   /users
GET    /users
GET    /users/1
PUT    /users/1
DELETE /users/1
```

---

# 7. URL Parameters

Used to identify a specific resource.

Example:

```http
GET /users/5
```

Here:

```javascript
5
```

is a parameter.

Express:

```javascript
app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
});
```

Request:

```text
/users/5
```

Output:

```text
5
```

---

# 8. Query Parameters

Used for filtering, searching, pagination.

Example:

```http
/users?age=20
```

or

```http
/users?page=2
```

Express:

```javascript
app.get("/users", (req, res) => {
    console.log(req.query);
});
```

Request:

```text
/users?page=2&limit=10
```

Output:

```javascript
{
  page: "2",
  limit: "10"
}
```

---

# 9. Request Body

Data sent to server.

Example:

```http
POST /users
```

Body:

```json
{
  "name": "Prince",
  "age": 22
}
```

Express:

```javascript
app.use(express.json());

app.post("/users", (req, res) => {
    console.log(req.body);
});
```

---

# 10. Status Codes

Very important.

---

## 200 OK

Success

```javascript
res.status(200).json(data);
```

---

## 201 Created

Resource created

```javascript
res.status(201).json(user);
```

---

## 400 Bad Request

Client sent wrong data

```javascript
res.status(400).json({
    message: "Invalid Input"
});
```

---

## 401 Unauthorized

Not logged in

```javascript
res.status(401).json({
    message: "Login Required"
});
```

---

## 403 Forbidden

Logged in but no permission

```javascript
res.status(403).json({
    message: "Access Denied"
});
```

---

## 404 Not Found

Resource doesn't exist

```javascript
res.status(404).json({
    message: "User Not Found"
});
```

---

## 500 Internal Server Error

Server crash/problem

```javascript
res.status(500).json({
    message: "Something went wrong"
});
```

---

# 11. JSON

REST APIs mostly communicate using JSON.

Example:

```json
{
  "id": 1,
  "name": "Prince",
  "age": 22
}
```

Node converts objects to JSON:

```javascript
res.json({
    name: "Prince"
});
```

---

# 12. RESTful Route Design

User API:

```text
GET      /users
GET      /users/:id
POST     /users
PUT      /users/:id
PATCH    /users/:id
DELETE   /users/:id
```

Product API:

```text
GET      /products
GET      /products/:id
POST     /products
PUT      /products/:id
DELETE   /products/:id
```

---

# 13. Stateless Nature of REST

Every request should contain all information needed.

Bad:

```text
Server remembers previous requests.
```

Good:

```text
Each request stands alone.
```

Example:

```http
GET /profile
Authorization: Bearer xyz123
```

The server checks token every request.

---

# 14. REST API Flow

Example:

```text
Client
   |
   | POST /users
   |
Server
   |
   | Save to Database
   |
Database
   |
Server
   |
   | 201 Created
   |
Client
```

---

# 15. Simple REST API in Express

Install:

```bash
npm install express
```

Code:

```javascript
const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const user = {
        id: Date.now(),
        name: req.body.name
    };

    users.push(user);

    res.status(201).json(user);
});

app.delete("/users/:id", (req, res) => {
    users = users.filter(
        user => user.id != req.params.id
    );

    res.json({
        message: "Deleted"
    });
});

app.listen(3000);
```

---

# 16. REST API Interview Questions

### What is REST?

An architectural style for building web services using HTTP.

### Difference between PUT and PATCH?

PUT:

```text
Replace entire resource
```

PATCH:

```text
Update only specific fields
```

### Difference between URL Params and Query Params?

URL Params:

```text
/users/1
```

Query Params:

```text
/users?page=1
```

### Why use JSON?

* Lightweight
* Human readable
* Easy for JavaScript

### What are CRUD operations?

* Create
* Read
* Update
* Delete

---

# Learning Order for Node.js Backend

Since you're currently learning Node.js, follow this order:

1. Node.js Basics
2. HTTP Module
3. REST API Concepts
4. Express.js
5. Middleware
6. MongoDB
7. Mongoose
8. Authentication (JWT)
9. File Uploads
10. Error Handling
11. API Security
12. Docker
13. Kubernetes
14. CI/CD
15. Cloud Deployment

