import Order from "../models/order.js";

const fetchOrders = async () => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (newOrder) => {
  try {
    const order = await new Order(newOrder);
    await order.save();
    return order;
  } catch (error) {
    console.log(error);
  }
};

const updateOrder = async (id, newUpdatedOrder) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, newUpdatedOrder);
    return updatedOrder;
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (id) => {
  try {
    await Order.findByIdAndDelete(id);
    return;
  } catch (error) {
    console.log(error);
  }
};

const getUserOrder = async (userId) => {
  try {
    const orders = await Order.find(userId);
    return orders;
  } catch (error) {
    console.log(error);
  }
};

const getOrderIncome = async (productId) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    return income;
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getOrderIncome,
};
