import express          from 'express'
import fs               from 'fs'
import path             from 'path'
import mongoose         from 'mongoose'
import cookieParser     from 'cookie-parser'
import bodyParser       from 'body-parser'
import * as controllers from './controllers/controllerList.js'
import * as middlewares from './middlewares/middlewareList.js'


const app = express()

//default middlewares
app.use(middlewares.ShowDateTime)

// parse body and cookies
app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//Load all controllers
Object.keys(controllers).forEach((key) => {
  app.use(middlewares.ShowControllerAndRoute(key))
  controllers[key](app)
})

/* Mongo */
mongoose.connect('mongodb://localhost/todoapp')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('DB Connected'))


export default app
