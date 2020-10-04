const express = require('express')
const next = require('next')
const fetch = require('node-fetch')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server = express()

    server.use(express.json())

    server.post('/json_auth', async (req, res) => {

        const response = await (await fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token-access': req.headers['x-token-access'],
            },
            body: JSON.stringify(req.body)
        })).json()

        res.json(response)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})