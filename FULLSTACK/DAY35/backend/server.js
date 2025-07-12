const app = require("./app");
const connectDB = require("./db");

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
