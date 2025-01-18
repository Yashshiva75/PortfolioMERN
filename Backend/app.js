const express  = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const cors = require('cors')
const router = express.Router()
const path = require('path')
const mail = require('./controllers/nodemailer')
app.use(cors())
app.use(express.json())
app.post('/mail',mail)
const _dirname = path.resolve()

app.use(express.static(path.join(_dirname,"/yashshiva/dist")))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"yashshiva","dist","index.html"))
})
app.listen(PORT,()=>{
    console.log(`SERVER STARTED AT PORT ${PORT}`)
})