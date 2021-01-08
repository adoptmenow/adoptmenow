const express = require('express')
const router = require('./routes/index.js')
const app = express()
const port = 4000
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded ({ extended:true }))
app.use('/', router)
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })