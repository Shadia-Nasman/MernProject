
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const CustomerSchema=new Schema({
    fname:{type: String},
lname:{type: String}, /* required:[true,'Name is required']}, */
age: {type:Number},
email:{type: String},
password:{type: String},
adress:{type:String}

});

const Customer=mongoose.model('Customer',CustomerSchema);//Customer: model///customer: collection in mongodb
module.exports=Customer;