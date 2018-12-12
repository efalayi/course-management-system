import dotenv from 'dotenv'
import express from 'express'
import appRouter from './routes'
import printMessage from '../tools/printMessage'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(appRouter)

app.listen(PORT, (error) => {
  if (error) {
    printMessage(error, 'red')
  } else {
    printMessage(`CMS is running on port: ${PORT}`, 'green')
  }
})
