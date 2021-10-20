require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const app = express()
require('./routes')(app)
const cors = require('cors')
const response = require('./traits/responses')

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

//app.get('env') is development by default if NODE_ENV its not set
console.log(`app: ${app.get('env')}`)

app.use(cors())

// Middleware: Gives full headers
app.use(helmet())

if (app.get('env') === 'development') {
    // MiddleWare: logs in console
    app.use(morgan('tiny'))
    console.log('Morgan enabled...')
}

app.use('/', (req, res) => {
    response.notFound(res, 'Http not found.');
})

app.listen(4000, () => console.log('listening on port 4000...........'));