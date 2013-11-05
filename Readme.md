
# string-highlight

  add specified tags to matching all substr instances within a string

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/string-highlight

## Example

```javascript
var el = document.getElementById('bold-me');
var str = el.innerText;
var highlight = require('string-highlight');
var altered = highlight(str, 'ben', '<b>', '</b>');
el.innerHTML = altered;
```

## License

  MIT
