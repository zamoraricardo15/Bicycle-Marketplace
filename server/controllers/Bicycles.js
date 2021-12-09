const mongoose = require("mongoose")

const Bicycle = mongoose.model('Bicycle')
const User = mongoose.model('User')

module.exports = {
    createBicycle: (req,res) => {



    },


    deleteBicycle: (req,res) => {

        

        
        Bicycle.findByIdAndDelete()
    },
    updateBicycle: (req,res) => {

        
        Bicycle.findByIdAndUpdate()


    }
}