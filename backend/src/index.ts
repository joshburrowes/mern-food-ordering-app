import express, { Request, Response } from "express";
import cors from 'cors';
import "dotenv/config";
import exp from "constants";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response)=> {
    res.json({message: "Hello World"})
});

app.listen(7000, ()=>{
    console.log("server started on localhost:7000")
});