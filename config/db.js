

const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://rajesh:ranjan@cluster0.0tzb4wv.mongodb.net/?retryWrites=true&w=majority")

module.exports = { connection }