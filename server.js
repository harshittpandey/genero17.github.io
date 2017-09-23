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



var server = app.listen(PORT,function() {

}) ;

//My code
//Completed task in this , can take reference
/*
var staticFolders = [
    'img',
    'css',
    'js',
    'fonts',
    'sounds',
    'vendor',
    'images',
    'pics'
]

//basically iterating over the array so that i don't need to type all things out , perks of being lazy :D
staticFolders.map(function (folder) {
    app.use(`/${folder}`, express.static(folder)) // note the use of `` backticks these are used as template strings in js (ES2016)
})

var pages = [
    'aboutus',
    'events',
    'sponsors',
    'starNight',
    'bcgk'
]

app.get('/', function (req, res) {//Serve the index page at the / route
    res.sendFile(path.join(__dirname, 'index.html'))
})

//redirect all the paths such as /events , /sponsors to /events.html and /sponsors.html
app.get('/:page/*', function (req, res) {
    res.redirect(`/${req.params.page}.html`)
})

//Serve page only if in the pages array , otherwise just redirect to the home page
app.get('/:page.html', function (req, res) {
    if (pages.findIndex(element => req.params.page == element) == -1)
        res.redirect('/')
    else
        res.sendFile(__dirname + `/${req.params.page}.html`)
})
*/