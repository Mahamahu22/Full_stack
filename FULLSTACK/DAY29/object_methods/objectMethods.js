const user = { name: 'Maha', age: 22 };

// Object.assign()
const updated = Object.assign({}, user, { age: 23 });
console.log("Assigned:", updated);

// Object.freeze()
const frozen = Object.freeze({ course: "JS" });
frozen.course = "React"; // ❌ won't change
console.log("Frozen:", frozen);

// Object.seal()
const sealed = Object.seal({ city: "Chennai" });
sealed.city = "Mumbai";  // ✅ can update
delete sealed.city;      // ❌ can't delete
sealed.newProp = "test"; // ❌ can't add
console.log("Sealed:", sealed);

// Object.keys()
console.log("Keys:", Object.keys(user));

// Object.values()
console.log("Values:", Object.values(user));

// Object.entries()
console.log("Entries:", Object.entries(user));

// hasOwnProperty()
console.log("Has name?", user.hasOwnProperty("name"));
