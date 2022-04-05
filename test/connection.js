const mongoose = require('mongoose');

//Connect to mongoDB
mongoose.connect('mongodb://localhost/database');

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error',function(error){
    console.log('connection error:',error);
})