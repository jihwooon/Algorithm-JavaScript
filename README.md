## Jest Getting Started

#### Jest Install
`npm install --save-dev jest` 
* `sum.js` file create
``` javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
* `sum.test.js` file create

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

* Add `package.json`
```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

* Start `npm test`
```javascript
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```