const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addMoneyToWallet = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const { amount } = req.body;
    user.wallet += amount;
    await user.save();
    res.json({ wallet: user.wallet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWalletBalance = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json({ wallet: user.wallet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    const totalCost = product.price * quantity;

    if (!product || product.quantity < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    if (user.wallet < totalCost) {
      return res.status(400).json({ message: "Insufficient wallet balance" });
    }

    user.wallet -= totalCost;
    product.quantity -= quantity;

    const order = await Order.create({
      userId: user._id,
      productId,
      quantity,
      totalAmount: totalCost,
    });

    user.orderHistory.push(order._id);

    await product.save();
    await user.save();

    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    res.json({ status: order.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("orderHistory");
    res.json(user.orderHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rateProduct = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const order = await Order.findById(req.params.orderId);
    if (order.status !== "Delivered") {
      return res.status(400).json({ message: "Rate only after delivery" });
    }

    const product = await Product.findById(order.productId);
    product.ratings.push({
      user: order.userId.toString(),
      rating,
      comment,
    });

    await product.save();
    res.json({ message: "Thanks for rating" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
