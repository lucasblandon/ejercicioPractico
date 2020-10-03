const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//config
app.set('port',process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//routes
app.use('/api/contacts',require('./routes/contact.routes'));

//server init
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000, ready !!');
});