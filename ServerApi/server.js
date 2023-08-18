const express = require('express')
const app = express()
const cors = require('cors')
const MongoDb = require('./db/mongodb')
const PORT = process.env.PORT || 5000
const AnimeRoutes= require('./routes/AnimeRoutes')
const UsersRoute = require('./routes/AuthRoute')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json(`Server running on port ${PORT}`)
})
//Database Connection
MongoDb


//Routes
AnimeRoutes(app)
UsersRoute(app)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})