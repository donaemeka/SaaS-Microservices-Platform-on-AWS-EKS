const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/api/login", async (req, res) => {
  try {
    const response = await axios.post("http://auth-service:3001/login", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Auth service error" });
  }
});

app.get("/api/tenant/:id", async (req, res) => {
  try {
    const response = await axios.get(`http://tenant-service:3002/tenant/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Tenant service error" });
  }
});
app.post("/api/tasks", async (req, res) => {
  try {
    const response = await axios.post("http://task-service:3003/tasks", req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Task service error" });
  }
});
app.get("/api/tasks/:tenantId", async (req, res) => {
  try {
    const response = await axios.get(`http://task-service:3003/tasks/${req.params.tenantId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Task service error" });
  }
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});