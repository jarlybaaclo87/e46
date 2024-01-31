const express = require('express');
const app = express();

//create a route handle for the home path
app.get('/', function(req, res){
    res.send('Hello Kode-brewers in Express!');
});

app.listen(3000);
console.log('Server listening at 127.0.0.1:3000');