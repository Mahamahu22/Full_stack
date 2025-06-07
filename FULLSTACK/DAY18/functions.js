// 1. Functional Programming Concepts
// Pure functions: always return the same output for the same input, no side effects (immutability).

// Pure function example:
function addPure(a, b) {
  return a + b;
}
console.log(addPure(2, 3)); // 5

// Immutability example:
const arrImmutable = [1, 2];
const newArrImmutable = [...arrImmutable, 3]; // Creates new array, original stays same
console.log(arrImmutable);     // [1, 2]
console.log(newArrImmutable);  // [1, 2, 3]

// ----------------------------------------------------

// 2. Event Loop and Asynchronous JavaScript
// Shows order of execution: sync, microtasks (Promises), macrotasks (setTimeout).

console.log('Start');

setTimeout(() => console.log('Timeout'), 0);       // Runs last
Promise.resolve().then(() => console.log('Promise'));  // Runs before setTimeout

console.log('End');

// Expected output order:
// Start
// End
// Promise
// Timeout

// ----------------------------------------------------

// 3. JavaScript Data Types & Type Coercion
// typeof operator, loose (==) vs strict (===) equality, truthy/falsy values.

console.log(typeof 42);           // "number"
console.log(typeof 'hello');      // "string"
console.log(typeof null);         // "object" (quirky behavior)

console.log(1 == '1');            // true  (loose equality allows type coercion)
console.log(1 === '1');           // false (strict equality, no coercion)

console.log(Boolean(0));          // false (falsy)
console.log(Boolean('non-empty'));// true  (truthy)

// ----------------------------------------------------

// 4. Error Handling (try/catch/finally)
// Catch runtime errors and run cleanup code.

try {
  throw new Error('Oops!');
} catch (e) {
  console.log('Caught:', e.message);
} finally {
  console.log('Always runs');
}

// ----------------------------------------------------

// 5. Object Property Shorthand & Computed Property Names
// Shorthand syntax for object properties and dynamic property names.

const x = 10, y = 20;
const objShorthand = { x, y };   // Same as { x: x, y: y }
console.log(objShorthand);       // { x: 10, y: 20 }

const propName = 'score';
const computedObj = {
  [propName]: 100               // Dynamic key name
};
console.log(computedObj);        // { score: 100 }

// ----------------------------------------------------

// 6. Spread and Rest Operators in Depth
// Spread (...) expands arrays or objects; rest (...) gathers function arguments.

const arrA = [1, 2];
const arrB = [3, 4];
const combinedAB = [...arrA, ...arrB];
console.log(combinedAB);        // [1, 2, 3, 4]

function sumAll(...args) {      // Rest operator collects all arguments
  return args.reduce((a, b) => a + b, 10);
}
console.log(sumAll(1, 2, 3, 4));  // 20 (10 + 1 + 2 + 3 + 4)

// ----------------------------------------------------

// 7. Template Literals Extended (multiline & tagged)
// Multiline strings and tagged template literals for custom processing.

const multiline = `This is line 1
This is line 2`;
console.log(multiline);

// Tagged template example:
function tag(strings, ...values) {
  // Uppercase all values inside the template
  return strings[0] + values.map((v, i) => v.toUpperCase() + strings[i + 1]).join('');
}

const tagged = tag`Hello ${'world'}! How are ${'you'} doing?`;
console.log(tagged);  // Hello WORLD! How are YOU doing?