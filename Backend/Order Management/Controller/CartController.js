const Order = require("../Model/CartModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const axios = require('axios');



const getUserDetails = async (authorization) => {
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authorization.split(" ")[1];

    try {
        const response = await axios.post("http://localhost:5000/api/auth/getUserDetails", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const userData = response.data;
        if (!userData) {
            console.log("User not found");
            return null;
        }
        else {
            return userData;
        }
    } catch (error) {
        console.error("Error while fetching user details:", error);
        return null;
    }
}











const createCart = async (req, res) => {
    const { ProductId} = req.body;
    try {
        const { authorization } = req.headers;
        const userData = await getUserDetails(authorization);
        if (userData.role != "Customer") {
            console.log("your not customer")
        }
        console.log("sasas", userData)
        const Cart = await Cart.create({
            ProductId,
            CustomerId: userData._id,
            
        });

        // sendMail(userData.email, "Your new order placed", "Your new order placed successfully , thank you for your order");
        res.status(200).json({
            ProductId: Cart.ProductId,
            CustomerId: Cart.CustomerId,
            
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// const deleteOrder = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const { authorization } = req.headers;
//         const userData = await getUserDetails(authorization);

//         const order = await Order.findOneAndDelete({ _id: id });
//         if (!order) {
//             return res.status(404).json({ error: "order not found" });
//         }

//         return res.json({ order });
//     } catch (error) {
//         console.error(error);
//         res.status(404).json({ error: "Internal Server error" });

//     }

// };

// const getOrder = async (req, res) => {
//     const { id } = req.params;

//     const { authorization } = req.headers;
//     const userData = await getUserDetails(authorization);

//     try {
//         const order = await Order.findOne({ id: id })
//             .populate("OrderId");

//         if (!order) {
//             return res.status(404).json({ error: "order not found" });

//         }
//         return res.json({ order });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "internal server error" });
//     }
// }
// const getAllOrders = async (req, res) => {
//     try {

//         const { authorization } = req.headers;
//         const userData = await getUserDetails(authorization);
//         const orders = await Order.find().populate("OrderId"); // Assuming "items" is the field you want to populate

//         return res.json({ orders });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// }

module.exports = { createCart };
