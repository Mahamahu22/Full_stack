// ✅ admin/adminRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("./adminController");

router.post("/product", adminController.addProduct);
router.put("/product/:id", adminController.editProduct);
router.delete("/product/:id", adminController.deleteProduct);
router.get("/products", adminController.viewProducts);

router.get("/orders", adminController.viewAllOrders);
router.patch("/order/accept/:orderId", adminController.acceptOrder);
router.patch("/order/deliver/:orderId", adminController.markDelivered);

// ✅ EXPORT the router
module.exports = router;
