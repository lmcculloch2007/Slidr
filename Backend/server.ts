import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT: number = 3000;

// Handles GET requests
app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

// Server setup
app.listen(PORT, () => {
    console.log(`The server is now listening on http://localhost:${PORT}`);
});
