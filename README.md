# SaaS Microservices Platform on AWS EKS

A cloud-native DevOps project demonstrating how to provision infrastructure with Terraform, deploy a microservices application on AWS EKS, expose it via a LoadBalancer, persist database data using EBS, and automate delivery with GitHub Actions.

---

## Project Overview

This project implements a microservices-based application deployed on AWS Elastic Kubernetes Service (EKS).

The system includes:
- multiple backend services (auth, tenant, task)
- API gateway
- PostgreSQL database
- Kubernetes orchestration
- Terraform infrastructure
- CI/CD pipeline using GitHub Actions

The goal is to demonstrate a complete DevOps workflow from infrastructure provisioning to automated deployment.

---

## Architecture

The platform is built using a microservices architecture deployed on AWS EKS.

- Services communicate through an API Gateway  
- Kubernetes manages deployment and scaling  
- PostgreSQL provides persistent storage  
- AWS LoadBalancer exposes the application  

![Architecture](images/1.%20Eks-Microservices-Architecture.png)

---

## Objectives

- Provision AWS infrastructure using Terraform  
- Deploy containerized microservices on Kubernetes (EKS)  
- Expose application through AWS LoadBalancer  
- Connect services to PostgreSQL database  
- Secure credentials using Kubernetes Secrets  
- Persist database data using EBS volumes  
- Automate build and deployment with CI/CD  

---

## What Was Implemented

- Created VPC with public and private subnets  
- Configured Internet Gateway and NAT Gateway  
- Deployed EKS cluster and node group  
- Built and pushed Docker images to Docker Hub  
- Deployed services using Kubernetes manifests  
- Configured LoadBalancer for external access  
- Integrated PostgreSQL with persistent storage  
- Implemented GitHub Actions pipeline for CI/CD  
- Verified application through public API endpoint  

---

## Technology Stack

**Cloud & Infrastructure**
- AWS (EKS, VPC, EC2, EBS, Load Balancer)
- Terraform

**Containers & Orchestration**
- Docker
- Kubernetes

**CI/CD**
- GitHub Actions
- Docker Hub

**Application**
- Node.js microservices
- PostgreSQL

---

## Repository Structure

```
saas_microservices/
├── .github/workflows/
├── frontend/
├── gateway/
├── gateway-api/
├── k8s/
├── services/
├── terraform/
├── images/
│   ├── 1. Eks-Microservices-Architecture.png
│   ├── 2. system-verification.png
│   └── 3. ci-cd-pipeline.png
├── docker-compose.yml
└── README.md
```

---

## Infrastructure (Terraform)

The infrastructure includes:
- VPC (custom CIDR)
- 2 public subnets
- 2 private subnets
- Internet Gateway
- NAT Gateway
- Route tables
- IAM roles
- EKS cluster
- Managed node group

Terraform uses variables for:
- CIDR blocks  
- region  
- cluster version  
- node size and scaling  

---

## Application Deployment (Kubernetes)

Kubernetes resources used:
- Deployments  
- Services (ClusterIP and LoadBalancer)  
- Secrets  
- PersistentVolumeClaim  

Flow:
1. Build Docker images  
2. Push to Docker Hub  
3. Apply Kubernetes manifests  
4. Expose gateway via LoadBalancer  

---

## CI/CD Pipeline

The CI/CD pipeline automates the build and deployment process using GitHub Actions.

Pipeline flow:
1. Checkout code  
2. Login to Docker Hub  
3. Build Docker images  
4. Push images  
5. Connect to AWS EKS  
6. Deploy Kubernetes manifests  
7. Restart deployments  

![CI/CD Pipeline](images/3.%20ci-cd-pipeline.png)

---

## Storage (PostgreSQL)

- PersistentVolumeClaim used for storage  
- Backed by AWS EBS  
- Data survives pod restarts  

Fix applied:
- Set PostgreSQL data directory to subfolder (`PGDATA`)  
- Prevented crash caused by `lost+found` in mount path  

---

## System Verification

The system was verified using Kubernetes commands and API testing.

Commands:

```
kubectl get pods
kubectl get svc
```

API test:

```
curl http://<loadbalancer-url>/api/tasks/company-a
```

Result:
- API returned valid JSON response  
- All services running successfully  
- Database connected and working  

![System Verification](images/2.%20system-verification.png)

---

## Challenges & Fixes

**1. Pod Scheduling Issue**  
- Cause: node capacity limit  
- Fix: scaled node group from 1 → 2  

**2. PVC Pending**  
- Cause: storage provisioning delay  
- Fix: verified EBS CSI and node availability  

**3. Database Crash**  
- Cause: mounted directory not empty  
- Fix: used subdirectory for PostgreSQL data  

**4. Service Connection Errors**  
- Cause: wrong configuration  
- Fix: corrected service names and environment variables  

**5. CI/CD Docker Auth Error**  
- Cause: wrong credentials  
- Fix: configured GitHub Secrets properly  

---

## Results

- Automated deployment for 4 services  
- Working EKS cluster with multiple nodes  
- Public API endpoint responding correctly  
- Persistent database storage configured  
- CI/CD pipeline fully operational  

---

## How to Run

### 1. Clone

```
git clone <repo-url>
cd saas_microservices
```

### 2. Terraform

```
cd terraform
terraform init
terraform apply
```

### 3. Configure kubectl

```
aws eks update-kubeconfig --region eu-west-2 --name saas-microservices
```

### 4. Deploy

```
kubectl apply -f k8s/
```

### 5. Verify

```
kubectl get pods
kubectl get svc
```

### 6. Test

```
curl http://<loadbalancer-url>/api/tasks/company-a
```

---

## Improvements (Next Steps)

- Use StatefulSet for PostgreSQL  
- Add monitoring (Prometheus, Grafana)  
- Use versioned Docker tags  
- Add HTTPS and domain  
- Improve Terraform with modules  

---

## Summary

This project demonstrates:
- infrastructure provisioning with Terraform  
- containerized deployment with Docker  
- orchestration with Kubernetes  
- cloud deployment on AWS EKS  
- CI/CD automation  
- troubleshooting real-world issues  

It reflects practical DevOps skills across infrastructure, deployment, and automation.