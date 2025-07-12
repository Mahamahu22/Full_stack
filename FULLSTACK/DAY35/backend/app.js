// ✅ app.js
const express = require("express");
const app = express();

const userRoutes = require("./user/userRoutes");
const adminRoutes = require("./admin/adminRoutes");

app.use(express.json());

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

module.exports = app;
