import app from './app.js';

const PORT: number = 3000;

// Server setup
app.listen(PORT, () => {
    console.log(`The server is now listening on http://localhost:${PORT}`);
});
