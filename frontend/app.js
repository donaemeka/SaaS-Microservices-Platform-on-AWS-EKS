const apiBase = "http://localhost:8081/api";

const taskList = document.getElementById("taskList");
const loadTasksBtn = document.getElementById("loadTasks");
const taskForm = document.getElementById("taskForm");

async function loadTasks() {
  const tenantId = document.getElementById("tenantId").value;

  const res = await fetch(`${apiBase}/tasks/${tenantId}`);
  const data = await res.json();

  taskList.innerHTML = "";

  data.tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `${task.title} - ${task.status}`;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const status = document.getElementById("status").value;
  const tenantId = document.getElementById("tenantId").value;

  await fetch(`${apiBase}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, status, tenantId })
  });

  taskForm.reset();
  document.getElementById("tenantId").value = tenantId;
  loadTasks();
});

loadTasksBtn.addEventListener("click", loadTasks);
loadTasks();