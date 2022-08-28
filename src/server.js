const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.get('/', (req, res) => {
    //res.send('MotherFucker! Yeah!')
      res.render('index')
})

app.get('/link-management-id', (req, res) => {
      res.render('link-management-id')
})


app.use(expressLayouts)
app.set('view engine', 'ejs')

const PORT = 3000

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))