// User define Constants
const PORT = 4000

// Module requires
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')

const app = express();
app.use(bodyParser.urlencoded({extended:false})) // To parse form data


//FRONTEND LOGIC:START
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

staticFolders.map(function (folder) {
    app.use(`/${folder}`, express.static(folder)) // note the use of `` backticks these are used as template strings in js (ES2016)
})

var pages = [
    'aboutus',
    'events',
    'sponsors',
    'starNight',
    'bcgk',
    'register'
]

function graph(req, res) {//Serve the index page at the / route
    res.sendFile(path.join(__dirname, 'index.html'))
}

app.get('/', graph)

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

//FRONTEND LOGIC:END

//REGISTER LOGIC:START
//All changes according to tutorials should be placed here


//REGISTER LOGIC:END

app.listen(PORT, function (data) {
    console.log(data)
});





//IGNORE
// app.post('/registerABES',(req,res)=>{//ES6 Function syntax
//     let a =req.body
//     a['id']=req.body.admissionNo
//     jsonStore.add(a,()=>123)
//     res.send(a)
// })

// app.post('/registerNONABES',(req,res)=>{//ES6 Function syntax
//     let a =req.body
//     a['id']=uuidv4()
//     jsonStoreNONABES.add(a,()=>123)
//     res.send(a) 
// })
