const express = require('express')
const appRoot = require('app-root-path')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require(`${appRoot}/routes.js`)
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.listen(3000, () => {

})
routes(app)