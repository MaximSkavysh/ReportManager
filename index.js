const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/config');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) =>{
    if (err){
        console.log('Could not connect to database: ' + err);
    }
    else {
        console.log('Connected to db: '+ config.db);
    }
})
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
});

app.listen(config.port, () => {
    console.log('Server is running on port: ' + config.port);
})