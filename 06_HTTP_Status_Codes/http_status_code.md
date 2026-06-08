HTTP Status Codes are 3-digit numbers sent by a server to tell the client (browser, mobile app, API, etc.) what happened to the request.

## Structure

|   Range   |   Meaning     |
| --------- | ------------- |
| 100-199   | Informational |
| 200-299   | Success       |
| 300-399   | Redirection   |
| 400-499   | Client Error  |
| 500-599   | Server Error  |

---

# 1xx - Informational Responses

These indicate that the request was received and the process is continuing.

| Code | Meaning             |
| ---- | ------------------- |
| 100  | Continue            |
| 101  | Switching Protocols |
| 102  | Processing          |
| 103  | Early Hints         |

### Example

```http
HTTP/1.1 100 Continue
```

Used when uploading large files.

---

# 2xx - Success Responses

Request was successfully received, understood, and accepted.

## 200 OK

Most common status code.

```js
res.status(200).send("Success");
```

Example:

* Get users
* Fetch products
* Homepage loads

---

## 201 Created

Resource created successfully.

```js
res.status(201).json(newUser);
```

Example:

* User registration
* Create post

---

## 202 Accepted

Request accepted but processing not completed.

Example:

* Video processing
* Background jobs

---

## 203 Non-Authoritative Information

Response modified by proxy.

---

## 204 No Content

Success but nothing to return.

```js
res.status(204).end();
```

Example:

* Delete operation

---

## 205 Reset Content

Tell client to reset form.

---

## 206 Partial Content

Part of a file returned.

Example:

* Video streaming

---

# 3xx - Redirection Responses

Client must take additional action.

## 301 Moved Permanently

Permanent redirect.

```js
res.redirect(301, "/new-page");
```

SEO transfers ranking.

---

## 302 Found

Temporary redirect.

```js
res.redirect(302, "/login");
```

---

## 303 See Other

Redirect after POST request.

---

## 304 Not Modified

Browser cache still valid.

Example:

* Browser uses cached CSS/JS

---

## 307 Temporary Redirect

Temporary redirect preserving HTTP method.

---

## 308 Permanent Redirect

Permanent redirect preserving method.

---

# 4xx - Client Errors

Client made a mistake.

## 400 Bad Request

Invalid request data.

```js
res.status(400).json({
    error: "Invalid input"
});
```

Example:

* Missing required fields

---

## 401 Unauthorized

Authentication required.

```js
res.status(401).json({
    message: "Login required"
});
```

Example:

* Missing JWT token

---

## 403 Forbidden

Authenticated but not allowed.

```js
res.status(403).json({
    message: "Access denied"
});
```

Example:

* User trying to access admin route

---

## 404 Not Found

Resource doesn't exist.

```js
res.status(404).send("Page not found");
```

Example:

* Wrong URL

---

## 405 Method Not Allowed

HTTP method not supported.

Example:

```http
POST /users
```

when only GET is allowed.

---

## 406 Not Acceptable

Server cannot provide requested format.

---

## 407 Proxy Authentication Required

Proxy authentication needed.

---

## 408 Request Timeout

Client took too long.

---

## 409 Conflict

Conflict with current resource state.

Example:

* Duplicate email registration

```js
res.status(409).json({
    message: "Email already exists"
});
```

---

## 410 Gone

Resource permanently removed.

---

## 411 Length Required

Content-Length header missing.

---

## 412 Precondition Failed

Request conditions failed.

---

## 413 Payload Too Large

Request body too large.

Example:

* Uploading 5GB file

---

## 414 URI Too Long

URL exceeds allowed size.

---

## 415 Unsupported Media Type

Wrong content type.

Example:

```http
Content-Type: text/plain
```

when API expects:

```http
Content-Type: application/json
```

---

## 416 Range Not Satisfiable

Invalid range request.

---

## 417 Expectation Failed

Expectation header cannot be fulfilled.

---

## 418 I'm a Teapot ☕

Funny code from RFC.

```http
418 I'm a teapot
```

---

## 421 Misdirected Request

Wrong server received request.

---

## 422 Unprocessable Entity

Validation failed.

```js
res.status(422).json({
    error: "Email is invalid"
});
```

Very common in APIs.

---

## 423 Locked

Resource is locked.

---

## 424 Failed Dependency

Dependent request failed.

---

## 425 Too Early

Server unwilling to process.

---

## 426 Upgrade Required

Client must upgrade protocol.

Example:

* HTTP → HTTPS

---

## 429 Too Many Requests

Rate limit exceeded.

```js
res.status(429).json({
    message: "Too many requests"
});
```

Example:

* API abuse

---

# 5xx - Server Errors

Server failed to complete request.

## 500 Internal Server Error

Most common server error.

```js
res.status(500).json({
    error: "Something went wrong"
});
```

Example:

* Unhandled exception

---

## 501 Not Implemented

Feature not implemented.

---

## 502 Bad Gateway

Gateway received invalid response.

Example:

* Nginx ↔ Backend issue

---

## 503 Service Unavailable

Server temporarily unavailable.

Example:

* Maintenance mode

```js
res.status(503).send("Server under maintenance");
```

---

## 504 Gateway Timeout

Upstream server timed out.

Example:

* Backend didn't respond

---

## 505 HTTP Version Not Supported

Unsupported HTTP version.

---

## Common Status Codes Every Backend Developer Must Know

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 204  | No Content            |
| 301  | Permanent Redirect    |
| 302  | Temporary Redirect    |
| 304  | Not Modified          |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Validation Error      |
| 429  | Too Many Requests     |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |
| 504  | Gateway Timeout       |

## Real-World REST API Examples

### GET /users/1

```http
200 OK
```

User found.

---

### GET /users/999

```http
404 Not Found
```

User doesn't exist.

---

### POST /users

```http
201 Created
```

New user created.

---

### POST /users (invalid data)

```http
400 Bad Request
```

Missing required fields.

---

### POST /login (wrong password)

```http
401 Unauthorized
```

Authentication failed.

---

### DELETE /users/1

```http
204 No Content
```

User deleted successfully.

---
