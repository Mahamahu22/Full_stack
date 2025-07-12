const Product = require("../models/Product");
const Order = require("../models/Order");

exports.addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = await Product.create({ name, price, quantity });
    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Updated", product: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.viewProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.viewAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name")
      .populate("productId", "name");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.acceptOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    order.status = "Accepted";
    await order.save();
    res.json({ message: "Order accepted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    order.status = "Delivered";
    await order.save();
    res.json({ message: "Order delivered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
