const server = require('./server');

// Start server:
const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`\n--- Server listening at ${PORT} ---\n`);
});