const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
    const server = express()
    server.get('/home', (req, res) => {
        return app.render(req, res, '/home', req.query)
    })
    server.get('/user/:username', (req, res) => {
        return app.render(req, res, '/user')
    })
  
    server.listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})