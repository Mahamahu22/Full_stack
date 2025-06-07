function logDivider() {
  console.log("---------------------------------------------------");
}

function logHeader(text) {
  console.log("\n" + "*".repeat(50));
  console.log(text.toUpperCase());
  console.log("*".repeat(50) + "\n");
}

module.exports = {
  logDivider,
  logHeader,
};