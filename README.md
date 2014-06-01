derby-tree
==========

###Derby tree

#Dynamic loading of tree items
```html
<view name="tree" on-items="onGetItems()"></view>
```

```javascript
    app.proto.onGetItems = function(model, next) {
        $.json('/tree?id=' + model.get('id'), next);
    };
```

#Static tree items
```html
<view name="tree" items="{{_page.items}}"></view>
```

```javascript
var items = [
    {
        title: 'Node title 1',
        expanded: false,
        className: 'text-danger',
        items: [
            {
                title: 'Sub node title 1',
                items: []
            }
        ]
    },

    {
        title: 'Node title 2'
    }
]

model.set('_page.items', items);
```