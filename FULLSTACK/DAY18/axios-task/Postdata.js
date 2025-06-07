const axios = require("axios");
const chalk = require("chalk");

async function postData() {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Hello Axios",
      body: "Learning how to use Axios for POST",
      userId: 1,
    });

    console.log(chalk.green("✅ Data posted successfully!\n"));
    console.log(response.data);
  } catch (error) {
    console.error(chalk.red("❌ Error posting data:"), error.message);
  }
}

postData();