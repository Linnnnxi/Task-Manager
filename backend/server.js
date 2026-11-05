const express = require('express');
const cors = require('cors');
require("dotenv").config();
const mongoose = require("mongoose"); // Import mongoose for MongoDB connection
const taskRoutes = require('./routes/taskRoutes'); // Import task routes

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes); // Use task routes for /tasks endpoint

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Task Manager API' });
});

const PORT = process.env.PORT || 5000; // Use the PORT from environment variables or default to 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});