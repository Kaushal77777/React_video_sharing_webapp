const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName : {type : String, required : true},
    lastName : {type : String , required : true},
    email : {type : String , required : true , unique : true , match : }
});