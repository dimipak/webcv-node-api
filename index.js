require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express');
const app = express()
const sequelize = require('./utils/database')
const routes = require('./routes/user')

console.log('env = ' + process.env.MYSQL_TEST)

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

//app.get('env') is development by default if NODE_ENV its not set
console.log(`app: ${app.get('env')}`)

// Middleware: Gives full headers
app.use(helmet())


if (app.get('env') === 'development') {
    // MiddleWare: logs in console
    app.use(morgan('tiny'))
    console.log('Morgan enabled...')
}

app.use(routes);

// app.get('/*', (req, res) => {
//     res.status(404).json({
//         'error': 'Endpoint not found!'
//     })
// })

sequelize.sync().then(result => {
    // console.log(result)
}).catch(err => {
    // console.log(err)
})

app.listen(4000, () => console.log('listening on port 4000...........'));