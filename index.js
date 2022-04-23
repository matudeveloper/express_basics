const express = require('express');
const  app = express();
// add directory to public folder
app.use(express.static('public'));

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
    res.render('index.ejs', {username : user});
});
app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/"> Go to HomePage </a>');
});
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});
/*this is a test*/