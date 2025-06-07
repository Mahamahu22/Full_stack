## Can we use this in arrow functions?

Yes, arrow functions can use this, but they do *not* have their own this context. Instead, they inherit this from the surrounding (lexical) scope where they are defined.

---

## Example: Arrow function inside a class method

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);  // 'this' refers to the Counter instance
    }, 1000);
  }
}

const c = new Counter();
c.start();  // After 1 second, prints: 1

Explanation:
The arrow function inside setTimeout inherits this from the start method, which correctly points to the instance of the class.