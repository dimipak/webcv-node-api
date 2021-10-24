const jwt = require("jsonwebtoken");
const passHash = require('password-hash')
const config = require('config')

module.exports = (app) => {

    app.get('/test', async (req, res) => {
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

        var val, val2;

       jwt.verify(token, 'shh', (err, decode) => {
            val = !err;
        })
        jwt.verify(token, 'shhhhh', (err, decode) => {
            val2 = !err;
        })

        var password = passHash.generate('secret')

        var passFalse = passHash.verify('secret', 'asdfasdfasdfasdf')
        var passTrue = passHash.verify('secret', password)

        var myjwt = config.get('jwt_secret')

        res.json({
            'token': token,
            'validate_wrong': val,
            'validate_correct': val2,
            'password': password,
            'password_verified_false': passFalse,
            'password_verified_true': passTrue,
            'jwt': myjwt
        })
    })


}