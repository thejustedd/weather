const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

app.engine('.hbs', exphbs({
    defaultLayout: 'app',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'app/views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

routes(app);

app.listen(3000);