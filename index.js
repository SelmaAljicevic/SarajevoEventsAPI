const mongoose = require('mongoose');

require('dotenv').config();

async function main() {
    await mongoose.connect(process.env.MONGO_URI);

    const user = new UserModel();
    user.username = 'elma';
    user.password = 'elma123';
    user.role = 'admin';
    await user.save();
}

main().catch(err => console.log('MongoDB Error:', err));

(async() => main())();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const UserModel = require("./models/UserModel");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;

app.listen(port, () => {
    console.log(`ElmaServer running on port: localhost:${port}.`);
});

app.get('/', (req, res, next) => {
    res.json({
        name: 'Elma NodeJSq API Server',
        version: '1.0.1',
    });
});

app.get('/api/users', (req, res, next) => {
    res.json({
        rest: 'All method',
    });
});

app.post('/api/users', (req, res, next) => {
    res.json({
        rest: 'Create method',
    });
});

app.get('/api/users/:id', (req, res, next) => {
    res.json({
        rest: 'Read method',
    });
});

app.put('/api/users/:id', (req, res, next) => {
    res.json({
        rest: 'Update method',
    });
});

app.delete('/api/users/:id', (req, res, next) => {
    res.json({
        rest: 'Delete method',
    });
});