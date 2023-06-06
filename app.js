const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
require('dot.env').config
const PORT = process.env.PORT || process
// middleware '
app.use(express.json)
app.use(cors())
// routes
fs('./routes').map(route)=>
app.use('/api/v1',require'./routes/'+routes)
app.get('/',(req, res,) =>{
    res.send('Hello World')
})
const server = () => {
    db()
    app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(require('./routes'))
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
}
server()
