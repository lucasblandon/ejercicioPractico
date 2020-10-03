const mongoose = require('mongoose');
const LDB = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

mongoose.connect(LDB)
    .then(db => console.log('connected'))
    .catch(err => console.error(err)) 

module.exports= mongoose;
