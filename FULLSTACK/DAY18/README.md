.Axios Task – Full Stack Training (DAY18)

This folder contains multiple JavaScript files demonstrating the use of Axios for making HTTP requests using different module systems (.js, .mjs, .cjs) in Node.js.

## Directory Structure

FULLSTACK/ └── DAY18/ └── axios-task/ ├── fetchpost.js ├── fetchpost.mjs ├── fetchusers.cjs ├── output.txt ├── Postdata.js ├── scoped.js ├── simple.js ├── utils.cjs

##  How to Run

### Prerequisites:
- [Node.js](https://nodejs.org/) installed (I'm using version *22.16.0*)
- Run this in a terminal, *not* in a browser

### Setup:

1. Open the terminal in this folder:
```bash
cd D:\FSD\Full_stack-1\FULLSTACK\DAY18\axios-task

2. Install the required packages:



npm install axios chalk and it provided node modules where it has packages like package-lock.json and package.json

Run each file using:

For CommonJS files:

node fetchpost.js
node fetchusers.cjs
node Postdata.js

For ES Modules:

node fetchpost.mjs


---

Sample Output using package.json

Running Postdata.js gives an output like this:

✅ Data posted successfully!

title: 'Hello Axios',
body: 'Learning how to use Axios for POST',
userId: 1,
id: 101

##  What I Learned

- How to install and use Axios to fetch and post data.
- The difference between .js, .cjs, and .mjs files in Node.js.
- How to use chalk to color terminal output for better readability.
- How to organize small tasks into different files and run them individually.
