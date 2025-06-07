const axios = require("axios");
const chalk = require("chalk");

// Create a scoped Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3000,
});

async function getScopedData() {
  try {
    const response = await api.get("/todos/1");

    console.log(chalk.green("✅ Scoped API call successful!\n"));
    console.log(response.data);
  } catch (error) {
    console.error(chalk.red("❌ Scoped API call failed:"), error.message);
  }
}

getScopedData();