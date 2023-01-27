const express = require('express')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT

const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// POST form data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// POST form data
app.post('/court', (req, res) => {
    console.log(req.body)
    res.send('Form data received')
})


app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`)
})