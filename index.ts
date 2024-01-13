import express, { Request, Response, NextFunction } from 'express'

const app = express()

const PORT = 3000

app.get('/time', (req: Request, res: Response, _next: NextFunction  ) => {
console.log('req :', req.body);
    res.setHeader('Content-Type', 'text/event-stream')
    // Allow all origins 
    res.setHeader('Access-Control-Allow-Origin', '*')

    const intervalID = setInterval(() => {
        res.write(`data: ${new Date()}\n\n`)
    }, 1000)

    res.on('close', () =>{
        console.log('Client Closed')
        clearInterval(intervalID)
        res.end()
    })
})

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})

