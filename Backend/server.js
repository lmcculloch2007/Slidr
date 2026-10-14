
const express = require('express');
const app = express();
const PORT = 3000;
//handles get request
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
//Server setup
app.listen(PORT, () => {
    console.log(`The server is now listening on port http://localhost:${PORT}`);
});
export {};
