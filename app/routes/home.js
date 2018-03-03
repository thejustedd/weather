const request = require('request-promise');
const config = require('../../config');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.post('/search', (req, res) => {
        res.redirect(`/${req.body.type}/${req.body.city}`);
    });

    // app.get('/errors', (req, res) => {
    //     res.render('errors', req);
    // });
}