import { Router } from 'express'
// import path from 'path'

const appRouter = new Router()

appRouter.get('/api/v1', (req, res) => {
  res.send({
    message: 'Welcome To Course-Manangement-System Gateway Platform'
  })
})

export default appRouter
