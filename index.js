require('dotenv').config();
const express = require('express');

const server = express();

server.use(express());

server.get('/', (req, res) => {
    const songs = [{id: 1, name: 'Final Countdown'}];
    res.status(200).json(songs);
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is listening on port ${port}`))