const user = require('../controllers/Users')
const bicycles = require('../controllers/Bicycles')
const path = require('path')


module.exports = (app) => {

    

    app.post('/register', (req,res) => {
        console.log('in the routes: ', req.body)
        user.registerUser(req,res)
    });


    app.post('/login', (req,res) => {
        user.loginUser(req,res)
    })


    app.delete('/logout', (req, res) => {
        user.logoutUser(req,res)
    })

    
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
}
