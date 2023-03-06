const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const shortId = require('shortid')
const short = require('short-uuid')
// const User = require('./User')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}))

mongoose.connect('mongodb://localhost:27017/userslinks')
  .then(() => {
    console.log('MongoDB connected!')
  })

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // @TODO:
  // get value of url fied
  const url = req.body.url
  // generate short url
  // @todo: validate URL
  res.send({
    url,
    shortUrl: 'http://localhost:3000/l/' + shortId.generate()
  })
  short.generate()
  console.log(short.generate())

  // generate unique ID (npm i uuid)
  // crate a link in the database (uniqueID + url + shortUrl) (mongoose)
  // redirect to /link/:uniqueID (express redirect)
})

app.get('/link/:uniqueID', (req, res) => {
  // get uniqueID from the request
  // read link info from database by uniqueID
  // if not found render 404
  // if found render url information
  res.render('link-management-id')
})

app.get('/l/:shortId', (req, res) => {
  // redirect to original url if exists
})

app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

const PORT = 3000

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))
