module.exports = function(app, options) {
    app.component(require('./lib'));
    app.loadStyles(__dirname + '/lib/index.css');
};