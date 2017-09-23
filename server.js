var express = require('express') ;
var app = express() ;
const PORT = 4000
app.use('/img',express.static('img')) ; // This is the corrected form to serve the img folder , pls correct in the lines below as well
app.use(express.static('audio')) ;
app.use(express.static('css')) ;
app.use(express.static('js')) ;
app.use(express.static('fonts')) ;
app.use(express.static('sounds')) ;
app.use(express.static('vendor')) ;
app.use(express.static('mockups')) ;
app.use(express.static('images')) ;
app.use(express.static('pics')) ;

app.get('/events(.html)*',function(req,res){
    res.sendFile(__dirname + '/events.html')
})


var server = app.listen(PORT,function() {

}) ;
