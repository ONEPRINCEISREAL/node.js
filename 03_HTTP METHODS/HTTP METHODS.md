<!-- HTTP methods (also called HTTP verbs) tell the server what action you want to perform on a resource.

## 1. GET

**Purpose:** Retrieve data from the server.

```http
GET /users
```

### Use when:

* Fetching user data
* Viewing a webpage
* Reading information

### Examples:

```http
GET /products
GET /users/1
GET /articles
```

---

## 2. POST

**Purpose:** Create a new resource.

```http
POST /users
```

### Use when:

* Registering a new user
* Creating a new blog post
* Uploading data

### Examples:

```http
POST /users
POST /orders
POST /products
```

Request Body:

```json
{
  "name": "Prince",
  "email": "prince@example.com"
}
```

---

## 3. PUT

**Purpose:** Replace an existing resource completely.

```http
PUT /users/1
```

### Use when:

* Updating all user information
* Replacing a record

### Example:

Before:

```json
{
  "name": "Prince",
  "age": 22
}
```

Request:

```json
{
  "name": "Prince Singh",
  "age": 23
}
```

After:

```json
{
  "name": "Prince Singh",
  "age": 23
}
```

---

## 4. PATCH

**Purpose:** Update only specific fields.

```http
PATCH /users/1
```

### Use when:

* Updating a username
* Changing an email
* Updating a single field

Example:

```json
{
  "email": "new@email.com"
}
```

---

## 5. DELETE

**Purpose:** Remove a resource.

```http
DELETE /users/1
```

### Use when:

* Deleting users
* Removing products
* Cancelling orders

Example:

```http
DELETE /products/10
```

---

## 6. HEAD

**Purpose:** Same as GET but returns only headers, not the response body.

```http
HEAD /file.pdf
```

### Use when:

* Checking if a file exists
* Checking content length
* Checking cache information

Response:

```http
HTTP/1.1 200 OK
Content-Length: 5000
```

No body is returned.

---

## 7. OPTIONS

**Purpose:** Discover which HTTP methods are allowed.

```http
OPTIONS /users
```

### Use when:

* CORS preflight requests
* API discovery

Response:

```http
Allow: GET, POST, PUT, DELETE
```

---

## 8. CONNECT

**Purpose:** Creates a tunnel between client and server.

### Use when:

* HTTPS through a proxy

Mostly used internally by browsers and proxies.

---

## 9. TRACE

**Purpose:** Echoes the received request.




## Node.js Example

```js
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.end("Fetching Data");
    }

    else if (req.method === "POST") {
        res.end("Creating Data");
    }

    else if (req.method === "PUT") {
        res.end("Updating Data");
    }

    else if (req.method === "DELETE") {
        res.end("Deleting Data");
    }

});

server.listen(8000);
```

 -->
