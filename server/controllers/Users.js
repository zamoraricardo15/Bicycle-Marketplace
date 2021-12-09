const mongoose = require("mongoose");
const password = require('./password');

const bcrypt = require("bcrypt")

const User = mongoose.model('User');


module.exports = {


    registerUser: (req,res) => {

        console.log('in the controller: ',req.body)

        User.findOne({email: req.body.email}, (err,user) => {

            if (user) {
                return res.json({'error' : 'That email is already in use'})

            } else {
                if( req.body.password !== req.body.passwordConfirm) {
                    return res.json({'error': 'Passwords do not match'})
                }
            }
            bcrypt.hash(req.body.password, 10)
                .then(hashedPassword => {


                    const lowerCase = req.body.password.search(/[a-z]/)
                    const numbers = req.body.password.search(/[0-9]/)



                    const upperCase = req.body.password.search(/[A-Z]/)
                    const length = req.body.password.length
                    if (lowerCase < 0 || numbers < 0 || upperCase < 0 ) {
                        hashedPassword = req.body.password
                        return res.json({'error': 'You must have at least one lowercase, uppercase and number'})
                    }


                    if ( length < 10 ) {
                        hashedPassword = req.body.password
                        return res.json({'error': 'Your password must be at least 10 characters long'})
                    }
                    const newUser = new User()
                    newUser.lName = req.body.lname;
                    newUser.fName = req.body.fname;



                    newUser.email = req.body.email;
                    newUser.password = hashedPassword;
                    newUser.save()
                        .then(newUser => res.json(newUser))
                        .catch(err => res.json(err))
                })
                .catch(err => {
                    return res.json(err)
                })
        })
    },
    loginUser: (req,res) => {
        console.log('in the controller',req.body)
        User.findById({email:req.body.email})


        
    },
    logoutUser: (req,res) => {

        
    }

}
