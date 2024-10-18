/* eslint-disable no-console */
require('dotenv').config()
import express from 'express'
import { APIs_V1 } from '~/routes/v1/index.js'
import cors from 'cors' // Thay vì require

const app = express()
const hostname = process.env.APP_HOST
const port = process.env.APP_PORT

app.use(cors()) // Cho phép CORS
app.use('/', APIs_V1)

app.listen(port, () => {
  console.log(`Server đang chạy tại http://${hostname}:${port}`)
})