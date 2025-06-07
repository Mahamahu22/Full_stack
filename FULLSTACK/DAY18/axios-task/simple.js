const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Simple GET Success:");
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Simple GET Error:", error.message);
  });