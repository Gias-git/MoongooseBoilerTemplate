import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()

app.get('/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("something")
            res.send("WELCOME TO New Server")
        } catch (error) {
            next(error);
        }
    }

)

export default app;