const { render } = require('ejs');
const mongoose = require('mongoose');
const express = require('express');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

//connect to mongodb
const dbURI = 'mongodb+srv://training:test1234@nodetraining.s2yaa9r.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

const app = express();

//register view engine
app.set('view engine', 'ejs');

//midleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

app.use('/blogs' ,blogRoutes);

// 404 page
app.use((req, res) => {
    res.render('404', {title: '404'});
})

module.exports = app;