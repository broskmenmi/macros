const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.engine('handlebars', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    partialsDir: path.join(__dirname, '/views/partials/')
}));

app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.render('index', { showVideo: true });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/calc', (req, res) => {

    let age = req.query.age;
    let height = req.query.height;
    let weight = req.query.weight;

    res.render('calc', {age: age, height: height, weight: weight});
});

app.listen(8080, () => {
    console.info('Server started at port ', 8080);
});