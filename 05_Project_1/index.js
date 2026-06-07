const express = require('express');

const users = require('./MOCK_DATA.json');

const app = express();

const PORT = 8000;


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
    res.json(users);
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
    // Get data from req.body and validate it
    return res.json({ message: 'User pending approval' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




