import { Router } from 'express'
import path from 'path'

const appRouter = new Router()

appRouter.get('/api/v1', (req, res) => {
  res.send({
    message: 'Welcome to course-manangement-system gateway platform'
  })
})

export default appRouter
