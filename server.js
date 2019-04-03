const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.engine('handlebars', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout')
}));

app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(8080, () => {
    console.info('Server started at port ', 8080);
});