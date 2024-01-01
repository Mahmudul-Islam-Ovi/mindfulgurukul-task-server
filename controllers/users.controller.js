const { ObjectId } = require("mongodb");
const client = require("../models/users.model");

const userCollection = client.db("full-stack-crud").collection("users");
// get all users
const getAllUsers = async (req, res) => {
  const result = await userCollection.find().toArray();
  res.send(result);
};

// get single users
const getSingleUsers = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.findOne(query);
  res.json(result);
};

// post users
const postUsers = async (req, res) => {
  const users = req.body;
  console.log(users);
  const result = await userCollection.insertOne(users);
  res.json(result);
};

// delete users
const deleteUsers = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.deleteOne(query);
  res.json(result);
};

// update users
const updateUsers = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      // password: req.body.password,
      phone: req.body.phone,
      //   address: req.body.address,
      //   isAdmin: req.body.isAdmin,
    },
  };
  const result = await userCollection.updateOne(query, updateDoc);
  res.json(result);
};

// login users
const loginUsers = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = { email: email, password: password };
  const result = await userCollection.findOne(query);
  res.status(200).json(result);
};

// logout users
const logoutUsers = async (req, res) => {};

// search users by phone number
const searchUsers = async (req, res) => {
  try {
    const { phone } = req.params; // Assuming phone is a route parameter

    // Use findOne based on your MongoDB setup
    const result = await userCollection.findOne({ phone: phone });

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  postUsers,
  deleteUsers,
  updateUsers,
  getSingleUsers,
  loginUsers,
  searchUsers,
};
