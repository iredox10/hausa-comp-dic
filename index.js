import express from 'express'
import mongoConnect from './utils/dbConnection.js'
import routes from './routes/routes.js'

const app = express()

mongoConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(3003)