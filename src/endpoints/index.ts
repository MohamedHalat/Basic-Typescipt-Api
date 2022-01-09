import { Request, Response } from "express";


export default function basicEndpoint(req: Request, res: Response) {
    res.send('Hello World!');
}