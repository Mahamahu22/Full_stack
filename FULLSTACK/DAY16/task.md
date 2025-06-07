 1. Arrow Functions  
Arrow functions provide a shorter syntax for writing functions. They automatically inherit this from the surrounding scope, making them useful especially in callbacks and methods.

```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7


---

 2. Object Destructuring

  Destructuring lets you extract properties from objects and assign them to variables in a clean, concise way.

const user = { name: "Emma", age: 28, city: "Paris" };
const { name, age } = user;
console.log(name); //  Emma
console.log(age);  // 28


---

3. Array Methods: map and filter

 map creates a new array by applying a function to each item.

filter creates a new array with only items that pass a condition.


const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4]


---

4. Spread Operator

 The spread operator ... expands arrays or objects. It helps merge or copy arrays/objects easily.

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }


---

5. Ternary Operator

 A concise way to write an if-else condition in one line.

const age = 17;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Minor


---

6. Template Literals

 Template literals allow embedding variables inside strings easily using backticks and ${}. They also support multiline strings.

const name = "Maha";
const greeting = `Hello, ${name}!
Welcome to the site.`;
console.log(greeting);