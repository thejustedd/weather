module.exports = function (app) {
    require('./home')(app);
    require('./weather')(app);
}