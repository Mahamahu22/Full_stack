// Try-Catch Example
try {
  const result = 10 / 0;
  console.log("Result:", result);
} catch (err) {
  console.error("❌ Error occurred:", err.message);
}

// Throw custom error
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
}

try {
  console.log(divide(8, 2));   // ✅
  console.log(divide(5, 0));   // ❌
} catch (error) {
  console.error("Custom Error:", error.message);
}
