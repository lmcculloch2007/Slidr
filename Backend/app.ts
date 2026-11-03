import express from "express";
import type { Request, Response } from 'express';

const app = express();

//allows JSON handling
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
    res.send('Basic Get Route is working!!');
});

//handles the POST requests
app.post('/', (_req: Request, res: Response) => {
    const message = _req.body?.message;

    if(typeof message !== 'string') {
        return res.status(400).json({
            error: "Message must be a string"
        });
    }

    res.status(200).json({
        result: message,
    })
});

//handles the PUT route
app.put('/', (_req: Request, res: Response) => {
    res.send("Basic PUT Route is working!!");
});


//handles the delete route
app.delete('/', (_req: Request, res: Response) => {
    res.send("Basic DELETE Route is working!!");
});

app.use((_req: Request, res: Response) => {
    res.status(404).json({
        error: "The Route was not Found",
    })
})

export default app;