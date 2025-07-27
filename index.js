const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://annalilly238:abelnova238@cluster0.f6whpuo.mongodb.net/studentapp?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("DB connected"))
 .catch(err => console.error("MongoDB connection error:", err));

// CREATE
app.post("/add", async (req, res) => {
  try {
    const blog = new BlogModel(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog added successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ
app.get("/get", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
app.put("/update/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Blog updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
