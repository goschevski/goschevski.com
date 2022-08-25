---
collection: posts
title: Better Collection Iteration in Backbone.js
description: It's a minor issue, but I've seen it in beginner tutorials and it bothers me. In the same function, people iterate over collections and create Item views...
createdAt: 2014-02-03
tags:
  - javascript
  - backbone.js
---

It's a minor issue, but I've seen it in beginner tutorials and it bothers me. In the same function, people iterate over collections and create Item views.

```javascript
var CollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list',

  render: function () {
    this.collection.each(function (item) {
      this.$el.append(new ItemView({ model: item }).render().el)
    }, this)
  },
})
```

This way, you can't reuse item creation code.

```javascript
var CollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addOne)
  },

  render: function () {
    this.collection.each(function (item) {
      this.$el.append(new ItemView({ model: item }).render().el)
    }, this)
  },

  addOne: function (item) {
    this.$el.append(new ItemView({ model: item }).render().el)
  },
})
```

So, instead of duplicating code, a better solution is to use a different method.

```javascript
var CollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addOne)
  },

  render: function () {
    this.collection.each(this.addOne, this)
  },

  addOne: function (item) {
    this.$el.append(new ItemView({ model: item }).render().el)
  },
})
```
