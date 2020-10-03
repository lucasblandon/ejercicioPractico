const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//config
app.set('port',process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/contacts',require('./routes/contact.routes'));

//server init
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000, ready !!');
});