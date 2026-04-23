# SaaS Microservices Platform on AWS EKS

## 🚀 Overview
Production-style multi-tenant microservices platform deployed on AWS EKS using Terraform, Kubernetes, Docker, and CI/CD automation.

This project simulates how a DevOps engineer designs, deploys, and operates a scalable cloud system in a real-world environment.

---

## ⚡ Key Highlights

- Reduced deployment time from ~2 hours to ~2 minutes using CI/CD  
- Deployed 4 microservices + PostgreSQL on Kubernetes  
- Exposed application via AWS LoadBalancer  
- Persistent storage using AWS EBS (data survives pod restarts)  
- Solved real Kubernetes and infrastructure issues  
- Achieved stable multi-node Kubernetes deployment  

---

## 🏗️ Architecture

![Architecture](images/eks-microservices-architecture.png)

---

## 🧠 System Design

The platform includes:

- Auth Service  
- Tenant Service  
- Task Service  
- API Gateway  
- PostgreSQL database  

Each service runs independently and communicates within Kubernetes.

---

## 🔄 CI/CD Pipeline

Pipeline flow:

- Code pushed to GitHub  
- GitHub Actions builds Docker images  
- Images pushed to Docker Hub  
- Kubernetes manifests deployed to EKS  

Deployment time reduced to ~2 minutes.

![CI/CD Pipeline](images/ci-cd-pipeline.png)

---

## 📦 Tech Stack

### Cloud & Infrastructure
- AWS (EKS, VPC, EC2, EBS, Load Balancer)  
- Terraform  

### Containers & Orchestration
- Docker  
- Kubernetes  

### CI/CD
- GitHub Actions  
- Docker Hub  

### Application
- Node.js microservices  
- PostgreSQL  

---

## 📊 Results

- Automated deployment for 4 microservices  
- Fully working CI/CD pipeline  
- Public API accessible via LoadBalancer  
- Persistent database storage across restarts  
- Stable Kubernetes deployment across multiple nodes  

---

## ⚠️ Challenges & Fixes

### Pod Scheduling Issue  
Cause: node capacity limit  
Fix: scaled node group from 1 to 2  

### PVC Pending  
Cause: storage provisioning delay  
Fix: verified EBS availability and node capacity  

### Database Crash  
Cause: incorrect mount directory  
Fix: configured PostgreSQL data path (PGDATA)  

### Service Connection Errors  
Cause: incorrect service configuration  
Fix: updated environment variables and service endpoints  

### CI/CD Authentication Failure  
Cause: incorrect Docker credentials  
Fix: configured GitHub Secrets correctly  

---

## 🧪 System Verification

```bash
kubectl get pods
kubectl get svc
```

```bash
curl http://<loadbalancer-url>/api/tasks/company-a
```

- Valid JSON response  
- All services running  
- Database connected  

![System Verification](images/system-verification.png)

---

## ▶️ Deployment Steps

### 1. Provision Infrastructure

```bash
terraform init
terraform apply
```

### 2. Deploy Application

```bash
kubectl apply -f k8s/
```

---

## 📌 Conclusion

This project demonstrates my ability to:

- Design cloud infrastructure with Terraform  
- Deploy microservices on Kubernetes (EKS)  
- Automate delivery with CI/CD  
- Debug and resolve real system issues  
- Build scalable and reliable systems  

---

## 👨‍💻 Author

Donatus Emeka Anyalebechi  
DevOps & Cloud Engineer  

📍 Germany  
📧 donaemeka92@gmail.com  
🔗 https://linkedin.com/in/donatus-devops  
🐙 https://github.com/donaemeka  

---

⭐ Built to demonstrate real-world DevOps capabilities
