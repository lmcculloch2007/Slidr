import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT: number = 3000;

// Handles GET requests
app.get('/', (_req: Request, res: Response) => {
    res.send('Basic Get Route is working!!');
});

//handles the POST requests
app.post('/', (_req: Request, res: Response) => {
    res.send("Basic Post Route is working!!");
});

//handles the PUT route
app.put('/', (_req: Request, res: Response) => {
    res.send("Basic PUT Route is working!!");
});


//handles the delete route
app.delete('/', (_req: Request, res: Response) => {
    res.send("Basic DELETE Route is working!!");
});

// Server setup
app.listen(PORT, () => {
    console.log(`The server is now listening on http://localhost:${PORT}`);
});
