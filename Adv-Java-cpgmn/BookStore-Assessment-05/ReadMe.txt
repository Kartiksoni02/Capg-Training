***************** 1. Assessment Description (Problem Statement) *****************

This assessment requires building a Spring Cloud Microservices based backend system for an online bookstore. The goal is to design and implement a distributed architecture where multiple independent services communicate with each other using REST APIs and service discovery.

The system simulates a BookStore platform where customers can browse books and place orders. The application must follow microservice architecture principles, including independent services, service discovery, API gateway routing, and inter-service communication.

According to the case study document, the system consists of four main components:

** Core Services **

1️⃣ Book Service

Responsible for managing the bookstore catalog.

It must provide full CRUD operations for books:

> Create a new book
> Retrieve all books
> Retrieve a book by ID
> Update a book
> Delete a book

Each book contains details such as:

> id
> title
> author
> isbn
> price
> quantity
> category

The service stores its data in its own database and runs independently.

2️⃣ Order Service

Responsible for managing customer orders.

It must also provide CRUD operations for orders:

Place an order

> Retrieve all orders
> Retrieve order by ID
> Update order status
> Delete/cancel order

While creating an order, the service must:

> Call the Book Service
> Fetch book price and details
> Calculate the total order price
> Save the order with status and date

This communication must be implemented using OpenFeign Client.

** Infrastructure Services **

3️⃣ Eureka Server (Service Registry)

Eureka Server acts as a service discovery mechanism where all microservices register themselves.

Instead of hardcoding service URLs, services look up each other through Eureka.

This enables:
> Dynamic service discovery
> Fault tolerance
> Loose coupling between services

4️⃣ API Gateway

The API Gateway acts as the single entry point for all client requests.

All external requests go through the gateway, which routes them to the appropriate microservice.

Example routes:
/api/books/**  → Book Service
/api/orders/** → Order Service

This hides internal service addresses and centralizes request routing.

** Inter-Service Communication **

The Order Service communicates with Book Service using a Feign Client.

When a user places an order:

> Client sends request to API Gateway
> Gateway routes request to Order Service
> Order Service asks Eureka for Book Service location
> Feign calls Book Service API
> Book details are returned
> Order Service calculates total price
> Order is stored and response returned

This workflow is illustrated in the sequence diagram in the assessment document (page 4).

** Technology Requirements **

The project must use:

> Java 17+
> Spring Boot 3
> Spring Cloud
> Eureka Server
> Spring Cloud Gateway
> OpenFeign
> Spring Data JPA
> H2 / Oracle database
> REST APIs

Each microservice must run on separate ports and maintain its own independent database.


______________________________________________________________________________________________________________________



***************** 2. Solution Overview (Implementation) *****************

This repository contains a complete implementation of the BookStore microservices architecture using Spring Boot and Spring Cloud.

The project is divided into four independent microservices that work together to provide the full functionality of the bookstore system.

** System Architecture **

The system consists of the following services:

Client
   │
   ▼
API Gateway (Port 8090)
   │
   ├── Book Service (Port 8081)
   │
   └── Order Service (Port 8082)
           │
           ▼
       Feign Client
           │
           ▼
      Book Service
           
All services register with:

Eureka Server (Port 8761)

** Implemented Microservices+ **

1️⃣ Eureka Server

Purpose:
Service registry for all microservices.

Responsibilities:

> Maintains the registry of all running services
> Enables service discovery
> Allows dynamic service communication

Port: 8761

2️⃣ Book Service

Purpose:
Manage bookstore catalog data.

Responsibilities:

> Store book details
> Manage book inventory
> Provide CRUD REST APIs

Endpoints:

GET    /api/books
GET    /api/books/{id}
POST   /api/books
PUT    /api/books/{id}
DELETE /api/books/{id}

Database: H2 in-memory database

3️⃣ Order Service

Purpose: Manage customer orders.

Responsibilities:

> Create orders
> Calculate order price
> Track order status
> Manage order records

Endpoints:

GET    /api/orders
GET    /api/orders/{id}
POST   /api/orders
PUT    /api/orders/{id}
DELETE /api/orders/{id}

Special Logic:
When placing an order: totalPrice = book.price × quantity

The book price is fetched from Book Service using Feign Client.

4️⃣ API Gateway

Purpose: Single entry point for all client requests.

Responsibilities:

> Route requests to appropriate services
> Hide internal service architecture
> Use Eureka for service discovery

Gateway routes:
/api/books/**  → Book Service
/api/orders/** → Order Service

Port: 8090

Key Features

✔ Microservices Architecture
✔ Service Discovery with Eureka
✔ API Gateway Routing
✔ Inter-service communication using Feign Client
✔ Independent databases for services
✔ Full CRUD operations
✔ REST API based communication
✔ Layered architecture (Controller → Service → Repository)

Startup Order :-

Services must start in the following order:

1. Eureka Server
2. Book Service
3. Order Service
4. API Gateway

After startup, all services should appear in the Eureka Dashboard: http://localhost:8761

** Testing the APIs **

All APIs must be tested through the API Gateway.

Example:

Create Book : POST http://localhost:8090/api/books

Place Order : POST http://localhost:8090/api/orders

** Learning Outcomes **

This project demonstrates practical implementation of:

> Microservice architecture
> Spring Cloud ecosystem
> Service discovery
> API gateway routing
> Inter-service communication
> Distributed system design


