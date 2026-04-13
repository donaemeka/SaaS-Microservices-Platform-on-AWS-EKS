const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: "postgres-service",
  port: 5432,
  user: "user",
  password: "password",
  database: "tasksdb"
});

async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        status TEXT NOT NULL,
        tenant_id TEXT NOT NULL
      )
    `);

    const check = await pool.query("SELECT COUNT(*) FROM tasks");
    if (parseInt(check.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO tasks (title, status, tenant_id)
        VALUES
        ('Deploy app', 'pending', 'company-a'),
        ('Fix login bug', 'done', 'company-a'),
        ('Update dashboard', 'pending', 'company-b'),
        ('Review tickets', 'done', 'company-b')
      `);
    }

    console.log("Database initialized");
  } catch (error) {
    console.error("Database init failed:", error.message);
  }
}

app.get("/tasks/:tenantId", async (req, res) => {
  const tenantId = req.params.tenantId;
app.post("/tasks", async (req, res) => {
  const { title, status, tenantId } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, status, tenant_id) VALUES ($1, $2, $3) RETURNING *",
      [title, status, tenantId]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Database error" });
  }
});
  try {
    const result = await pool.query(
      "SELECT id, title, status FROM tasks WHERE tenant_id = $1",
      [tenantId]
    );

    res.json({
      tenantId,
      tasks: result.rows
    });
  } catch (error) {
    res.status(500).json({ message: "Database error" });
  }
});

app.listen(3003, async () => {
  console.log("Task Service running on port 3003");
  await initDb();
});