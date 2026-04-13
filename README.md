
# SaaS Microservices Platform (Kubernetes)

🚧 Project in progress – more features (CI/CD, frontend, Terraform) coming soon

## Overview
This project is a multi-tenant microservices application built using Node.js and deployed on Kubernetes. It demonstrates containerization, service-to-service communication, and modern traffic routing using Gateway API with Envoy Gateway.

## Architecture
The system consists of the following services:

- Auth Service (user authentication)
- Tenant Service (tenant/company management)
- Task Service (task management with PostgreSQL)
- API Gateway (Node.js service acting as entry point)

## Technologies Used
- Docker (containerization)
- Kubernetes (orchestration)
- Gateway API + Envoy Gateway (traffic routing)
- PostgreSQL (database)
- Node.js + Express (backend services)

## How It Works
User requests flow through the system as follows:

User → Envoy Gateway → HTTPRoute → API Gateway → Backend Services → PostgreSQL

## Features
- Multi-tenant architecture
- Microservices-based design
- Service-to-service communication via Kubernetes Services
- External traffic routing using Gateway API
- Persistent data storage using PostgreSQL

## Future Improvements
- Add task creation API
- Add frontend (React)
- Implement CI/CD with GitHub Actions
- Provision infrastructure using Terraform
=======
# SaaS Microservices Platform (Kubernetes)

🚧 Project in progress – more features (CI/CD, frontend, Terraform) coming soon

## Overview
This project is a multi-tenant microservices application built using Node.js and deployed on Kubernetes. It demonstrates containerization, service-to-service communication, and modern traffic routing using Gateway API with Envoy Gateway.

## Architecture
The system consists of the following services:

- Auth Service (user authentication)
- Tenant Service (tenant/company management)
- Task Service (task management with PostgreSQL)
- API Gateway (Node.js service acting as entry point)

## Technologies Used
- Docker (containerization)
- Kubernetes (orchestration)
- Gateway API + Envoy Gateway (traffic routing)
- PostgreSQL (database)
- Node.js + Express (backend services)

## How It Works
User requests flow through the system as follows:

User → Envoy Gateway → HTTPRoute → API Gateway → Backend Services → PostgreSQL

## Features
- Multi-tenant architecture
- Microservices-based design
- Service-to-service communication via Kubernetes Services
- External traffic routing using Gateway API
- Persistent data storage using PostgreSQL

## Future Improvements
- Add task creation API
- Add frontend (React)
- Implement CI/CD with GitHub Actions
- Provision infrastructure using Terraform

