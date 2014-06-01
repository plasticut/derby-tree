function Tree() {
}

module.exports = Tree;

Tree.prototype.name = 'tree';
Tree.prototype.view = __dirname + '/index.html';

Tree.prototype.create = function(model) {
    model.set('loadingText', 'Loading...');
    if (!model.get('items')) {
        this.getItems(model);
    }
};

Tree.prototype.getItems = function(node, next) {
    node.set('loading', true);
    this.emit('items', node, function(items) {
        node.set('items', items);
        node.set('loading', false);
        if (next) { next(); }
    });
};

Tree.prototype.getBindedModel = function(el) {
    while (el.previousSibling && (!el.previousSibling.$bindStart) || !el.previousSibling) {
        el = el.parentNode;
    }

    el = el.previousSibling;

    var path =  el && el.$bindStart && el.$bindStart.context.expression.pathSegments(el.$bindStart.context).join('.');

    return this.model.scope(path);
};

Tree.prototype.clickNode = function(ev) {

    var node = this.getBindedModel(ev.target);

    if (node !== this.model) {
        node.set('expanded', !node.get('expanded'));
        if (!node.get('items') && !node.get('loading')) {
            this.getItems(node);
        }
    }

};
