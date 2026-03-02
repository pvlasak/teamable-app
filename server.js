const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// use /root and index.html is to be found in the dist directory where minified html file is saved  
app.use('/', express.static(__dirname + '/dist'))

app.listen(3000, function () {
    console.log("app listening on port 3000.")
})