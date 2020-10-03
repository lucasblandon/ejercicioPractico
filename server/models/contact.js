const { Double } = require('bson');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    firstname:{ type:String, required: true},
    lastname:{ type:String, required:false},
    celular:{ type:Number, required:false},
    email:{type:String, required:false}
},
{
  versionKey: false,
  timestamps: true,
}
);

module.exports = mongoose.model('Contact',contactSchema);