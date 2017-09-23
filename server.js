var express = require('express') ;
var app = express() ;
const PORT = 4000
app.use(express.static('img')) ;
app.use(express.static('audio')) ;
app.use(express.static('css')) ;
app.use(express.static('js')) ;
app.use(express.static('fonts')) ;
app.use(express.static('sounds')) ;
app.use(express.static('vendor')) ;
app.use(express.static('mockups')) ;
app.use(express.static('images')) ;
app.use(express.static('pics')) ;
var server = app.listen(PORT,function() {

}) ;
