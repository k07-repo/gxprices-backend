const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const productsRouter = require('./controllers/products')
const groupsRouter = require('./controllers/groups')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const listsRouter = require('./controllers/lists')
const metaRouter = require('./controllers/meta')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use('/products', productsRouter)
app.use('/groups', groupsRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/lists', listsRouter)
app.use('/meta', metaRouter)

app.use(middleware.errorHandler)

module.exports = app
