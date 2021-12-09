const mongoose = require("mongoose")
const Schema = mongoose.Schema
// TODO: Create Schema for a bicycle
const BicycleSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectID, ref: 'User', required: true},
    imageUrl: {
        type: String,
        required: [true, 'An image is required'],
        match: [/^((http[s]?|ftp):\/)?\/?$/, "The URL is invalid"]
    },


    title: {
        type: String,
        required: [true, 'A title is required'],
        minlength: [4, 'A title must be at least 4 characters long']
    },


    price: {
        type: Number,
        required: [true, 'You must enter a price']
    },


    description: {
        type: String,
        required: [true, 'Your must add a description'],
        minlength: [10, 'The description must be longer than 10 characters']
    },



    location: {
        type: String,
        required: [true, 'You must enter the location of the bicycle']
    }


    
}, {timestamps: {createdAt: 'createdAt', updatedAt: ' updatedAt'}})




mongoose.model('Bicycle', BicycleSchema)