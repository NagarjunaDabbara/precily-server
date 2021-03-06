require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

const smtpRouter = require('./routes/smtpRouter')


const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())


// Routes

app.use('/api/smtp',smtpRouter)


// Connect to MongoDB
const URI = process.env.MONGODB_URI
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


var PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log('Chat server running');
  });