import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello from Server BookStore')
})

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
})