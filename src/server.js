const express = require('express');

// Route handlers:
const root = require('./routes/root');

const server = express();

server.route('/').get(root.GET);

// Start server:
const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log(`\n--- Server listening at ${PORT} ---\n`);
});