const student = {
  name: "Lakshmi",
  age: 21,
  subjects: ["Math", "English"],
  address: {
    city: "Chennai",
    pin: 600001
  }
};

student.age = 22;
student.name = "Maha";
student.subjects.push("Science");
student.address.city = "Coimbatore";

console.log("📌 Updated student:", student);

student.getDetails = function () {
  return `${this.name}, Age: ${this.age}, City: ${this.address.city}`;
};
console.log("📘 Student Details:", student.getDetails());

const newField = "graduated";
student[newField] = true;
console.log("✅ With Dynamic Field:", student);

console.log("❄️ Is Frozen:", Object.isFrozen(student));

Object.freeze(student);

student.name = "FrozenName";
student.newProp = "Test";
delete student.age;

console.log("🔒 After Freeze Attempt:", student);
