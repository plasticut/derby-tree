var derby = require('derby');

var app = module.exports = derby.createApp('app', __filename);

global.app = app;

app.loadViews (__dirname);
app.loadStyles(__dirname + '/../bower_components/bootstrap/dist/css/bootstrap.min.css');
app.use(require('../../'));

app.proto.log = function(obj) {
    return JSON.stringify(obj, null, 4);
};


app.proto.onGetItems = function(model, next) {
    var classes = [
        'text-danger',
        'text-warning',
        'text-info',
        'text-success',
        'text-primary',
        'text-muted'
    ];
    var level = model.get('level') || 0;
    var items = [];

    level++;

    for (var i=0, l=(1 + Math.floor(Math.random() * 10)); i<l; i++) {
        items.push({
            level: level,
            name: 'Node ' + i,
            className: classes[Math.floor(Math.random() * classes.length)]
        });
    }

    if (level > 1) {
        setTimeout(function() {
            next(items);
        }, 1000);
    } else {
        next(items);
    }
};

app.get('/', function (page, model){

    model.set('_page.items', [
        {
            name: 'Node 1',
            className: ''
        }
    ]);

    page.render();
});