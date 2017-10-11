const express = require('express', '4.16.2')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

// MongoClient.connect('link-to-mongodb', (err, database) => 
// {
    
// })

app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', function (req, res)
// {
//     res.send('Hello World!')
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    // console.log('Yo yo yo!')
    console.log(req.body)
})

app.listen(4560, function()
{
    console.log('Example app listening on port 4560!')
})

// app.post('/', function(req, res)
// {
//     res.send('POSTing')
// })
//
// app.put('/user', function(req, res)
// {
//     res.send('Got a PUT request at /user')
// })
//
// app.delete('/user', function(req, res)
// {
//     res.send('DELETEing')
// })

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

