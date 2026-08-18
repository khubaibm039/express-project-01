const express = require('express')
const morgan = require('morgan')
const router = require('./userContactRoute')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/user',router)


app.get('/', (req, res) => {
    res.send("<h1>This is the contact project</h1>")
})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`this project running on PORT: ${PORT}`)
})