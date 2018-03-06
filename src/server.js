import express from 'express'
import setupMiddware from './middleware'
import {restRouter} from './api'
import {connect} from './db'
import {signin, protect} from './api/modules/auth'
// Declare an app from express
const app = express()

setupMiddware(app)
connect()
// setup basic routing for index route
const apiRouter = express.Router()
apiRouter.get('/', (req, res) => {
  res.json({api: true})
})

app.use('/signin', signin)

app.use('/api', apiRouter)

// catch all
app.all('*', (req, res) => {
  res.json({ok: true})
})

export default app
