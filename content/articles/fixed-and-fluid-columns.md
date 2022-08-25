---
collection: posts
title: Fixed and Fluid Columns
description: We can create a "one column fixed and one column fluid" layout using various techniques, but most of these solutions are hacky and have flaws such as magic numbers, hard coded values, and so on...
createdAt: 2014-05-02
tags:
  - css
---

We can create a "one column fixed and one column fluid" layout using various techniques, but most of these solutions are hacky and have flaws such as magic numbers, hard coded values, and so on. In our office, we discussed the issue and attempted to find the best solution. We looked it up on the internet and tried several approaches, but our [colleague](https://github.com/vladimirsiljkovic) came up with the best one.

### Solution

```html
<main>
  <aside>This is the fixed sidebar.</aside>

  <section>This is fluid main section.</section>
</main>
```

And the CSS:

```css
main:after {
  content: '';
  display: table;
  clear: both;
}

aside {
  float: left;
  max-width: 200px;
}

section {
  overflow: hidden;
}
```

This solution works in IE6+ browsers, but there is one flaw that becomes apparent when you need to use overflow in a different way in the fluid section. There is no need for magic numbers or fixed values. Of course, until browsers support flexbox, this is the best solution.

The demo is available on [CodePen](http://codepen.io/goschevski/pen/zDGvh).
