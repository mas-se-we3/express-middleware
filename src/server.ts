import bodyParser from 'body-parser'
import express from 'express'
import { logging, loggingWithOptions } from './logging'
import { scramble } from './scramble'
import { toNumbers } from './toNumbers'

const app = express()
const port = 3003

app.use(bodyParser.json())

// Middlewares
app.use('/api', logging)
app.use('/api/2', loggingWithOptions({ showIp: false }))

// Enpoints
app.get('/api/1', (req, res) => {
  res.send('Ok')
})

app.get('/api/2', (req, res) => {
  res.send('Ok')
})

app.get('/api/scramble', scramble, (req, res) => {
  res.send(req.body)
})

app.get('/api/add', toNumbers, (req, res) => {
  const numbers: number[] = req.body.numbers
  res.send(numbers.reduce((sum, current) => current + sum, 0).toString())
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
