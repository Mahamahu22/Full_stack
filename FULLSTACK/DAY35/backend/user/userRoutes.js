// ✅ user/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.post("/create", userController.createUser);
router.post("/wallet/add/:userId", userController.addMoneyToWallet);
router.get("/wallet/balance/:userId", userController.getWalletBalance);
router.post("/order/:userId", userController.createOrder);
router.get("/order/status/:orderId", userController.getOrderStatus);
router.get("/orders/history/:userId", userController.getOrderHistory);
router.post("/order/rate/:orderId", userController.rateProduct); // optional

// ✅ EXPORT the router
module.exports = router;
