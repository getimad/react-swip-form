require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("node:fs");
const path = require("node:path");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

const pathFile = path.join(__dirname, "form-data.json");

app.get("/api/form", (req, res) => {
  fs.readFile(pathFile, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file!" });
    }

    res.json({
      message: "File read successfully!",
      data: JSON.parse(data),
    });
  });
});

app.put("/api/form", (req, res) => {
  const { data } = req.body;

  fs.writeFile(pathFile, JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).json({ message: "Error writing file!" });
    }
  });

  res.json({
    message: "Data saved successfully!",
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
