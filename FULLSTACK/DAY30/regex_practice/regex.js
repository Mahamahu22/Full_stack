const sample = "My name is Maha. My email is maha@example.com and phone is 9876543210";

// Match email
const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,}\b/;
console.log("📧 Email:", sample.match(emailRegex)[0]);

// Match phone number
const phoneRegex = /\b\d{10}\b/;
console.log("📱 Phone:", sample.match(phoneRegex)[0]);

// Match name using 'My name is ...'
const nameRegex = /My name is (\w+)/;
const nameMatch = sample.match(nameRegex);
console.log("👤 Name:", nameMatch ? nameMatch[1] : "Not found");

