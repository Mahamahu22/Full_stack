const axios = require("axios");
const chalk = require("chalk");

function logDivider() {
  console.log("---------------------------------------------------");
}

async function fetchUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    console.log(chalk.green("✅ Users fetched successfully!\n"));

    users.forEach((user, index) => {
      console.log(chalk.cyan('User #${index + 1}'));
      console.log('Name: ${user.name}');
      console.log('Email: ${user.email}');
      console.log('City: ${user.address.city}');
      logDivider();
    });
  } catch (error) {
    console.error(chalk.red("❌ Error fetching users:"), error.message);
  }
}

fetchUsers();