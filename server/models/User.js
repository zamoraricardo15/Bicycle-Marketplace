const mongoose = require("mongoose")
const Schema = mongoose.Schema





const UserSchema = new mongoose.Schema({
    _reviews: [{type: Schema.Types.ObjectID, ref: 'Bicycle'}],
    fName: {



        type: String,



        required: [true, 'A first name is required'],
        minlength: [2, 'A first name must be longer than 2 characters']



    },


    lName: {
        type: String,
        required: [true, 'A last name is required'],
        minlength: [2, 'A last name must be longer than 2 characters']
    },


    email: {

        
        type: String,
        unique: [true, 'This email is already in use'],
        required: [true, 'An email is required'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "email entered is not of a valid form"]
    },


    password: {
        type: String,
        required: [true, 'A password is required'],
        minlength: [10, 'Your passwords must be at least 10 characters long']
    }
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}})




mongoose.model('User', UserSchema)