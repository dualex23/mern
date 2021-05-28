const express = require('express')
const authRouter = require('./routes/auth.router')
const config = require('config')

const app = express()

const port = config.get('port') || 3000

// by default
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// authentification
app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})