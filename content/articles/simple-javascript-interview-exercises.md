---
collection: posts
title: Simple JavaScript Interview Exercises
description: It's fine to talk about technology when interviewing someone, however, it's common to find that when you scratch the surface with some exercises, candidates don't really understand concepts...
createdAt: 2016-01-14
tags:
  - javascript
  - programming
---

It's fine to talk about technology when interviewing someone, however, it's common to find that when you scratch the surface with some exercises, candidates don't really understand concepts. So, to ensure that the candidate understands the topic they are discussing, it is a good idea to test their knowledge with exercises that should not take too long and can instantly show you the candidate's skill level.

### Context (call, apply)

This is how we want to use `someFn`. Candidate should define it.

```javascript
var result = someFn({ someProperty: 'interview' }, function () {
  console.log('This pointing to', this)
})

console.log('Result is', result)

// expected output
// This pointing to { someProperty: 'interview' }
// Result is 1
```

Solution:

```javascript
var someFn = function (obj, cb) {
  cb.call(obj)
  return 1
}
```

#### Bonus

You can change function to check if candidate knows how to use `apply`.

```javascript
var result = someFn(
  { someProperty: 'interview' },
  function (param1, param2) {
    console.log('This pointing to', this)
    console.log('Param 1 is', param1)
    console.log('Param 2 is', param2)
  },
  ['cool', 'interview']
)

console.log('Result is', result)

// expected output
// This pointing to { someProperty: 'interview' }
// Param 1 is "cool"
// Param 2 is "interview"
// Result is 1
```

Solution:

```javascript
var someFn = function (obj, cb, params) {
  cb.apply(obj, params)
  return 1
}
```

### Prototype and Iteration

Define a native method called `each` for iterating over the array with an option to pass the context as a second argument.

```javascript
var arr = [1, 2, 3]
arr.each(function (arrayItem, counter) {
  console.log('index', counter)
  console.log('item', arrayItem)

  arr[counter] = arrayItem + 1
}, this)
```

Solution:

```javascript
Array.prototype.each =
  Array.prototype.each ||
  function (cb, context) {
    for (var i = 0; i < this.length; i++) {
      cb.call(context || this, this[i], i)
    }
  }
```

### Scope

Define `someFn` which can work like this.

```javascript
var counter = someFn(1)
console.log('First call', counter(3))
console.log('Second call', counter(1))
console.log('Third call', counter(5))

// expected output
// First call 4
// Second call 5
// Third call 10
```

Solution:

```javascript
var someFn = function (start) {
  var private = start

  return function (increment) {
    private += increment

    return private
  }
}
```
