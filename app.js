const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

// routes
fs.readdirSync('./routes').map(route => {
    app.use('/api/v1', require('./routes/' + route));
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

server();
