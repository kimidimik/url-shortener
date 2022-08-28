const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/userslinks')
.then (() => {
      console.log('MongoDB connected! Nice, Dima')
})

app.get('/', (req, res) => {
    //res.send('MotherFucker! Yeah!')
      res.render('index')
})

app.get('/link-management-id', (req, res) => {
      res.render('link-management-id')
})


app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

const PORT = 3000

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))