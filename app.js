const express = require('express', '4.16.2')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const app = express()

app.set('view engine', 'ejs')

MongoClient.connect('mongodb://localhost:27017/NodeTestDB', (err, database) => 
{
    if (err) return console.log(err)
    db = database
    app.listen(58531, () => {
        console.log('connection established on port 58531')
    })
})

app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     // let cursor = db.collection('quotes').find()
//     db.collection('games').find().toArray(function(err, results) {
//         console.log(results)
//     })

// })

app.get('/', (req, res) => {
    
    if (db.collection('games'))
    {
    db.collection('games').find().toArray((err, result) => {
        if (err) return console.log(err)

        res.render('index.ejs', {games: result})
    })
    }
    else{
        res.sendFile(__dirname + '/index.html');
    }
});

app.get('/del', (req, res) => {
    db.collection('games').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('index.ejs', {quotes: result})
    })
})

// app.get('/grab', (req, res) => {
    
//     db.collection('games').find().toArray((err, result) => {
//         if (err) return console.log(err)

//         res.render('index.ejs', {})
//         res.redirect('/')
//     })
// });

// app.post('/add', (req, res) => {
//     // console.log('Yo yo yo!')
//     db.collection('games').save(req.body, (err, result) => {
//         if (err) return console.log(err)

//         console.log('saved to database')
//         res.redirect('/')
//     })
// });

app.post('/add', (req, res) => {
    db.collection('games').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
});



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/quotes', (req, res) => {
//     // console.log('Yo yo yo!')
//     db.collection('quotes').save(req.body, (err, result) => {
//         if (err) return console.log(err)

//         console.log('saved to database')
//         res.redirect('/')
//     })
// });

app.listen(4560, () => {
    
});