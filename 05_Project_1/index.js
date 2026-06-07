const express = require('express');

const users = require('./MOCK_DATA.json');

const fs = require('fs');

const app = express();

const PORT = 8000;


// Middleware
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`Hello from middleware 1`);
    res.myUserName = "Prince Singh chauhan "
    next();
});

app.use((req, res, next) => {
    console.log(`Hello from middleware 2`);
    return res.end({ message: 'Hello from middleware 2' });
    next();
});


// Routes

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;  
    res.send(html);
});

// REST API endpoint to get all users
app.get('/api/users', (req, res) => {
    console.log(`Hello from API endpoint`, res.myUserName);
    return res.json(users);
});


app.route('/api/users/:id').get((req, res) => {
    const Id = parseInt(req.params.id);
    const user = users.find(user => user.id === Id);
    return res.json(user);
}).patch((req, res) => {
    // Get data from req.body and validate it
    return res.json({ message: 'User pending approval' });
}).delete((req, res) => {
    // Get data from req.body and validate it
    return res.json({ message: 'User pending approval' });
}).put((req, res) => {
    // Get data from req.body and validate it
    return res.json({ message: 'User pending approval' });
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: 'User added successfully', id: users.length + 1 });
       });

    
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




