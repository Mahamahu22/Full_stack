import axios from "axios";
import chalk from "chalk";

function logDivider() {
  console.log("---------------------------------------------------");
}

async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data;

    console.log(chalk.green("✅ Data fetched successfully!\n"));

    posts.slice(0, 5).forEach((post, index) => {
      console.log(chalk.yellow('Post #${index + 1}'));
      console.log(chalk.blue('Title: ${post.title}'));
      console.log(chalk.gray('Body: ${post.body.substring(0, 50)}'));
      logDivider();
    });
  } catch (error) {
    console.error(chalk.red("❌ Error fetching posts:"), error.message);
  }
}

fetchPosts();