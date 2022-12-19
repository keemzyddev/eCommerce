import OrderService from "../services/orderService.js";

export const fetchOrders = async (req, res) => {
  try {
    const order = await OrderService.fetchOrders();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (req, res) => {
  const { body } = req;
  const newOrder = {
    userId: body.userId,
    products: body.products,
    amount: body.amount,
    address: body.address,
    status: body.status,
  };
  try {
    const order = await OrderService.createOrder(newOrder);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const newUpdatedOrder = {
    userId: body.userId,
    products: body.products,
    amount: body.amount,
    address: body.address,
    status: body.status,
  };
  try {
    const updatedOrder = await OrderService.updateOrder(id, newUpdatedOrder);
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await OrderService.deleteOrder(id);
    res.status(200).json("Order deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getUserOrder = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await OrderService.getUserOrder(userId);
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getOrderIncome = async (req, res) => {
  const { productId } = req.params;
  try {
    const income = await OrderService.getOrderIncome(productId);
    res.status(200).json({ OrderStat: income });
  } catch (error) {
    console.log(error);
  }
};
