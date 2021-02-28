const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const { mongoUrl } = require('./keys')


require('./model/Users');
require('./model/Admin');
require('./model/Company');

const requireToken = require('./middleware/requireToken')
const requireToken2 = require('./middleware/requireToken2')
const requireToken3 = require('./middleware/requireToken3')
const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRoutes)

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log("connected to mongo")
})

mongoose.connection.on('error', (err) => {
    console.log("this is error", err)
})
app.get('/', requireToken, (req, res) => {
    res.send({ email: req.user.email })
})
app.get('/admin', requireToken2, (req, res) => {
    res.send({ email: req.admin.email })
})
app.get('/company', requireToken3, (req, res) => {
    res.send({ email: req.company.email })
})

app.listen(PORT, () => {
    console.log("server running at " + PORT)
})