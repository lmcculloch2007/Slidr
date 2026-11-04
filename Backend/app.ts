import express, {type NextFunction} from "express";
import type { Request, Response } from 'express';
import cors from 'cors';



const app = express();

//change for the frontend
app.use(cors({
    origin: 'http://localhost:8080',
}));


//allows JSON handling
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
    res.send('Basic Get Route is working!!');
});

//search get route
app.get('/search', (req: Request, res: Response) => {
    const product = req.query.product;

    if(typeof product !== 'string' || product.trim() === '') {
        res.status(400).json({
            error: "A valid product name is required",
        });
        return;
    }

    res.status(200).json({
        message:"Search request has been received",
        searchTeam: product.trim()
    });
});

//health get route
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Slidr backend is currently running"
    });
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

//app.ts and pythonserver communication

app.post('/api/analyze', async(_req: Request, res: Response) =>{

    try{
        const response = await fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(_req.body)
        });

        const data = await response.json();
        res.status(response.status).json(data);
    }catch(error){
        res.status(502).json({
            error: " Python server is not responding"
        });
    }
});

//handles the PUT route
app.put('/', (_req: Request, res: Response) => {
    const message = _req.body?.message;

    if(typeof message !== 'string') {
         res.status(400).json({
            error:"Message must be a string"
        });
        return;
    }
    res.status(200).json({
        result: message,
    });
});


//handles the delete route
app.delete('/api/test/:id', (_req: Request, res: Response) => {
    const id = Number(_req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({
            error: "Invalid ID"
        });
        return;
    }

    res.status(200).json({
        message: "Delete Route is working!",
        id: id
    });
});

//use route
app.use((
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
)=>{
    console.error("Server error:", err.message);

    res.status(500).json({
        error: "Internal server Error"
    });
});
export default app;