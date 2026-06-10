# MongoDB for Beginners

MongoDB is a **NoSQL database** that stores data in **documents** instead of rows and columns like MySQL or PostgreSQL.

Think of it this way:

### SQL Database

```sql
Users Table

+----+--------+------+
| id | name   | age  |
+----+--------+------+
| 1  | Prince | 22   |
+----+--------+------+
```

### MongoDB

```json
{
  "_id": "123",
  "name": "Prince",
  "age": 22
}
```

MongoDB stores data in JSON-like format called **BSON (Binary JSON)**.

---

# Why MongoDB?

### Advantages

✅ Flexible schema

✅ Easy to scale

✅ Fast development

✅ Stores nested data

✅ Popular with Node.js

✅ Great for modern web applications

---

# MongoDB Terminology

| SQL         | MongoDB            |
| ----------- | ------------------ |
| Database    | Database           |
| Table       | Collection         |
| Row         | Document           |
| Column      | Field              |
| Join        | Embedded Documents |
| Primary Key | _id                |

---

# MongoDB Structure

```
MongoDB Server
│
├── Database
│   │
│   ├── Collection
│   │   │
│   │   ├── Document
```

Example:

```
Company
│
├── employees
│   ├── Prince
│   ├── Rahul
│
├── products
│   ├── Laptop
│   ├── Mobile
```

---

# Document

A document is a single record.

```json
{
  "name": "Prince",
  "age": 22,
  "city": "Bhopal"
}
```

---

# Collection

A group of documents.

```javascript
users
```

Contains:

```json
{
  "name": "Prince"
}
```

```json
{
  "name": "Rahul"
}
```

---

# Database

A group of collections.

```javascript
companyDB
```

Contains:

```javascript
users
products
orders
```

---

# BSON

MongoDB stores data as BSON.

BSON supports:

```javascript
String
Number
Boolean
Date
Object
Array
Null
ObjectId
```

Example:

```json
{
  "name": "Prince",
  "age": 22,
  "isAdmin": false,
  "createdAt": "2026-06-08"
}
```

---

# _id Field

Every document automatically gets:

```json
{
  "_id": ObjectId("6844...")
}
```

Example:

```json
{
  "_id": ObjectId("123"),
  "name": "Prince"
}
```

Used as primary key.

---

# Installing MongoDB

### Local Installation

Download from:

[MongoDB Community Server](https://www.mongodb.com/try/download/community?utm_source=chatgpt.com)

---

### Check Version

```bash
mongod --version
```

---

# MongoDB Compass

GUI for MongoDB.

Like phpMyAdmin for MySQL.

Download:

[MongoDB Compass](https://www.mongodb.com/products/tools/compass?utm_source=chatgpt.com)

---

# Mongo Shell

```bash
mongosh
```

---

# Database Commands

## Show Databases

```javascript
show dbs
```

---

## Create / Switch Database

```javascript
use companyDB
```

---

## Current Database

```javascript
db
```

---

# Collection Commands

## Create Collection

```javascript
db.createCollection("users")
```

---

## Show Collections

```javascript
show collections
```

---

# CRUD Operations

CRUD =

* Create
* Read
* Update
* Delete

---

# CREATE

## Insert One

```javascript
db.users.insertOne({
    name: "Prince",
    age: 22
})
```

---

## Insert Many

```javascript
db.users.insertMany([
{
    name: "Prince"
},
{
    name: "Rahul"
}
])
```

---

# READ

## Find All

```javascript
db.users.find()
```

---

## Pretty Output

```javascript
db.users.find().pretty()
```

---

## Find One

```javascript
db.users.findOne()
```

---

## Find Specific User

```javascript
db.users.find({
    name: "Prince"
})
```

---

# Query Operators

## Equal

```javascript
db.users.find({
    age: 22
})
```

---

## Greater Than

```javascript
db.users.find({
    age: {$gt: 20}
})
```

---

## Less Than

```javascript
db.users.find({
    age: {$lt: 25}
})
```

---

## Greater Than Equal

```javascript
db.users.find({
    age: {$gte: 22}
})
```

---

## Less Than Equal

```javascript
db.users.find({
    age: {$lte: 30}
})
```

---

## Not Equal

```javascript
db.users.find({
    age: {$ne: 22}
})
```

---

# Logical Operators

## AND

```javascript
db.users.find({
    age: 22,
    city: "Bhopal"
})
```

---

## OR

```javascript
db.users.find({
    $or: [
        {age:22},
        {city:"Bhopal"}
    ]
})
```

---

# Projection

Return only specific fields.

```javascript
db.users.find(
    {},
    {
        name:1,
        age:1
    }
)
```

---

# UPDATE

## Update One

```javascript
db.users.updateOne(
    {name:"Prince"},
    {
        $set:{
            age:23
        }
    }
)
```

---

## Update Many

```javascript
db.users.updateMany(
    {},
    {
        $set:{
            country:"India"
        }
    }
)
```

---

# DELETE

## Delete One

```javascript
db.users.deleteOne({
    name:"Prince"
})
```

---

## Delete Many

```javascript
db.users.deleteMany({
    city:"Bhopal"
})
```

---

# Sorting

Ascending:

```javascript
db.users.find().sort({
    age:1
})
```

Descending:

```javascript
db.users.find().sort({
    age:-1
})
```

---

# Limit

```javascript
db.users.find().limit(5)
```

---

# Skip

```javascript
db.users.find().skip(10)
```

Pagination:

```javascript
db.users.find()
.limit(10)
.skip(20)
```

---

# Indexes

Indexes make queries faster.

Create Index:

```javascript
db.users.createIndex({
    email:1
})
```

View Indexes:

```javascript
db.users.getIndexes()
```

---

# Aggregation Pipeline

MongoDB's most powerful feature.

Example:

```javascript
db.users.aggregate([
{
    $match:{
        age:{$gte:18}
    }
},
{
    $group:{
        _id:"$city",
        total:{$sum:1}
    }
}
])
```

Result:

```json
[
{
 "_id":"Bhopal",
 "total":15
}
]
```

---

# Relationships

## Embedded Data

```json
{
  "name":"Prince",
  "address":{
      "city":"Bhopal",
      "state":"MP"
  }
}
```

---

## Referenced Data

User:

```json
{
 "_id":1,
 "name":"Prince"
}
```

Order:

```json
{
 "_id":101,
 "userId":1
}
```

---

# MongoDB Atlas

Cloud version of MongoDB.

Features:

* Free Tier
* Backups
* Monitoring
* Cloud Hosting

Official website:

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas?utm_source=chatgpt.com)

---

# MongoDB with Node.js

Install Driver:

```bash
npm install mongodb
```

Connect:

```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri);

await client.connect();
```

---

# MongoDB with Mongoose

Mongoose is an ODM (Object Data Modeling) library.

Install:

```bash
npm install mongoose
```

Connect:

```javascript
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/companyDB"
);
```

---

# Schema

```javascript
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
```

---

# Model

```javascript
const User = mongoose.model(
    "User",
    userSchema
);
```

---

# Save User

```javascript
const user = new User({
    name:"Prince",
    age:22
});

await user.save();
```

---

# Find Users

```javascript
const users = await User.find();
```

---

