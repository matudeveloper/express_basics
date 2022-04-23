const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:true}));

// add directory to public folder
app.use(express.static('public'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));
// add views template engine
app.set('view engine', 'ejs');


app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if(username === 'user' && password === 'qwerty') {
        res.redirect('/dashboard');
    }
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});


app.get('/questions', (req, res) => {
    let questions = [
        {title: "What is Node.js?", user: "Kadi", votes: "10"},
        {title: "What is Express.js?", user: "Mikk", votes: "8"}
    ]
    res.render('index', {questions:questions})
});

// set up brauser aadress row router
app.get('/', (req, res) => {
    //create html response
    res.send('<a href="/contact"> Contact us </a> <br> <a href = "/about"> About us </a>');
});

app.get('/contact', (req, res) => {
    res.send('<h1> Contact us page </h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1> About us page </h1>');
});

app.get('/demo', (req, res) => {
    res.render('index.ejs');
});

app.get('/user/:username', (req, res) => {
    // get parameter data from address row
    let user = req.params.username;
    // use this data template
    res.render('index', {username : user});
});

app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/"> Go to HomePage </a>');
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});