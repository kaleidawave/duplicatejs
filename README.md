# Duplicate.js

Duplicate is a simple Javascript script for duplicating HTML elements. Given a node with children, Duplicate will clone the *first* child node by a number specified.

### How to use:

Simply import it into your HTML (Make sure it is deferred to make it run once the DOM is loaded)
```html
<script defer src="https://cdn.jsdelivr.net/gh/kaleidawave/duplicatejs/duplicate.min.js"></script>
```

Then given a node with a child
```html
<div class="duplicatejs" data-duplicate="5">
    <p> Hello </p>
</div>
```

Will be transformed into:
```html
<div class="duplicatejs" data-duplicate="5">
    <p> Hello </p>
    <p> Hello </p>
    <p> Hello </p>
    <p> Hello </p>
    <p> Hello </p>
</div>
```

(data-duplicate refers to the final number of elements)
